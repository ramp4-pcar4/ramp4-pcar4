import { Extent } from '@/geo/api';
import type { BasemapChange } from '@/geo/api';
import { ExtentguardAPI } from './api/extentguard';
import { type ExtentguardConfig, useExtentguardStore } from './store';
import { GlobalEvents } from '@/api';

interface ClipResult {
    min: number;
    max: number;
    changed: boolean;
}

/**
 * Compares a range of co-ordinates to a bounding range of co-ordinates. If center of the range falls outside
 * the bounding range, function will return a range that is back inside the bounding range
 *
 * @function clipCoords
 * @param {Number} testMax maximum value of the range to test
 * @param {Number} testMin minimum value of the range to test
 * @param {Number} boundingMax maximum value of the bounding range
 * @param {Number} boundingMin minimum value of the bounding range
 * @return {ClipResult} bundle of information. resulting range and flag if it was adjusted
 */
function clipCoords(
    testMax: number,
    testMin: number,
    boundingMax: number,
    boundingMin: number
): ClipResult {
    // center co-ord of the  range to test
    const testLength = testMax - testMin;
    const middle = testMin + testLength / 2;

    // smallest of the two input ranges.
    // this is required to avoid a "washing machine" effect when the test range
    // is much larger than the bounding range. Re-adjusting by the test range size can
    // overshoot the bound and then another bound violation triggers. Which sends it
    // back too far. Over and over and over.
    const safeLength = Math.min(testLength, boundingMax - boundingMin);

    if (middle > boundingMax) {
        // our midpoint is too high
        return {
            min: boundingMax - safeLength,
            max: boundingMax,
            changed: true
        };
    } else if (middle < boundingMin) {
        // our midpoint is too low
        return {
            min: boundingMin,
            max: boundingMin + safeLength,
            changed: true
        };
    } else {
        // range was all good
        return {
            min: testMin,
            max: testMax,
            changed: false
        };
    }
}

class ExtentguardFixture extends ExtentguardAPI {
    /**
     * Schema change event handler name
     */
    private schemaEH = '';

    /**
     * Extent change event handler name
     */
    private extentEH = '';

    added(): void {
        // take in any configuration

        this._parseConfig(this.config);

        // watch for configuration changes
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: ExtentguardConfig | undefined) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            // cleanup

            unwatch();

            const store = useExtentguardStore(this.$vApp.$pinia);
            store.$reset();
            this.evtOff('schemaEH');
            this.evtOff('extentEH');
        };

        // watch for basemap schema changes
        this.schemaEH = this.$iApi.event.on(
            GlobalEvents.MAP_BASEMAPCHANGE,
            (payload: BasemapChange) => {
                if (payload.schemaChanged) {
                    // make sure new schema wants the fixture active
                    this.checkActive();
                }
            }
        );

        // do a status check when map creates, or if map already created
        if (this.$iApi.geo.map.created) {
            this.checkActive();
        } else {
            this.$iApi.event.once(GlobalEvents.MAP_CREATED, () => {
                this.checkActive();
            });
        }
    }

    /**
     * Examines current state of the instance and activates or deactivates appropriately
     */
    private checkActive(): void {
        const store = useExtentguardStore(this.$vApp.$pinia);
        if (
            store.alwaysOn ||
            store.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id)
        ) {
            if (!store.active) {
                // turn on, start listening to extent changes
                store.setActive(true);

                this.extentEH = this.$iApi.event.on(
                    GlobalEvents.MAP_EXTENTCHANGE,
                    (extent: Extent) => {
                        if (!store.enforcing) {
                            this.enforceBoundary(extent, false);
                        }
                    }
                );
            }
        } else if (store.active) {
            // turn off
            store.setActive(false);
            this.evtOff('extentEH');
        }
    }

    /**
     * Wraps the act of checking if an event handler exists, and if so, removing it.
     * Just a reapeated code saver
     * @param eventPropName property name of this class that can hold an event handler name
     * @private
     */
    private evtOff(eventPropName: 'extentEH' | 'schemaEH'): void {
        if (this[eventPropName]) {
            this.$iApi.event.off(this[eventPropName]);
            this[eventPropName] = '';
        }
    }

    /**
     * Checks if the center of the given extent is outside of the maps maximum extent. If it is,
     * will pan the map back to something appropriate
     *
     * @function enforceBoundary
     * @param {Extent} extent an extent to adjudicate
     * @param {boolean} safetyCheck indicates if this enforcement is a check against an original enforcement
     */
    private enforceBoundary(extent: Extent, safetyCheck: boolean): void {
        const maxExtent = this.$iApi.geo.map.getExtentSet().maximumExtent;

        const xTest = clipCoords(
            extent.xmax,
            extent.xmin,
            maxExtent.xmax,
            maxExtent.xmin
        );

        const yTest = clipCoords(
            extent.ymax,
            extent.ymin,
            maxExtent.ymax,
            maxExtent.ymin
        );

        if (yTest.changed || xTest.changed) {
            // something was adjusted.

            if (safetyCheck) {
                // stranded in a stuck zone.
                // attempting to zoomTo back to a good location will not work. esri map will
                // just derivate the equivalent co-ord in the stuck zone and stay there.
                // this hard-resets our view back to a safe zone, then the following zoomTo
                // will place the map where we wanted it.

                this.$iApi.geo.map.esriView!.extent = maxExtent.toESRI();
            }

            const respectfulExtent = Extent.fromParams(
                'extguard',
                xTest.min,
                yTest.min,
                xTest.max,
                yTest.max,
                extent.sr
            );

            const store = useExtentguardStore(this.$vApp.$pinia);
            store.setEnforcing(true);
            // timeout due to how spammy extent change events are when mouse-panning.
            // lets the user pan finish before triggering the snapback.
            // adjusted animation as the default is pretty aggressive and mildly shocking.
            // 300ms on linear is also ok. ease-in-out feels a bit more natural to me.
            setTimeout(() => {
                this.$iApi.geo.map
                    .zoomMapTo(
                        respectfulExtent,
                        undefined,
                        true,
                        400,
                        'ease-in-out'
                    )
                    .then(() => {
                        store.setEnforcing(false);
                        // need to check again. a very wild pan on a wrappable co-ord system
                        // can strand us in a zone where you get stuck.
                        // the saftey param gets turned on, will perform rescue moves if
                        // we're stuck.
                        this.enforceBoundary(
                            this.$iApi.geo.map.getExtent(),
                            true
                        );
                    });
            }, 150);
        }
    }
}

export default ExtentguardFixture;
