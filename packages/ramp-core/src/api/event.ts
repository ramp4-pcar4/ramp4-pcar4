import Vue from 'vue';

export enum GlobalEvents {
    /**
     * Fires when a Vue component is registered with `rInstance.component(...)`.
     * Payload: `(id: string)`
     */
    COMPONENT = 'r4/component'
}

// private for EventBus internals, so don't export
// a simple data structure for managing the Event API on fixtures.
// TODO if we end up supporting toggle/disabled events, add an active boolean flag to the structure
// TODO add "once" boolean if/when we add support for that
class EventHandler {
    eventName: string;
    handlerName: string;
    handlerFunc: Function;

    constructor (eName: string, hName: string, handler: Function) {
        this.eventName = eName;
        this.handlerName = hName;
        this.handlerFunc = handler;
    }
}

export class EventBus {

    /**
     * A vue instance that provides an event bus for all events.
     *
     * @private
     * @type {Vue}
     * @memberof EventBus
     */
    private readonly _eventBus: Vue;

    // need something that manages event name, handler name, and the actual handler function
    // TODO fancy doc
    private readonly _eventRegister: Array<EventHandler>;

    // a helpful register of event names that have been announced by the app and fixtures.
    // TODO fancy doc
    // TODO this is not essential. we can decide to remove the feature. would also remove .registerEventName and .eventNames
    private readonly _nameRegister: Array<string>;

    // for autonamer
    private _funCounter: number;

    constructor () {
        this._eventBus = new Vue();
        this._eventRegister = [];
        this._funCounter = 1;

        // add the public enum items here, as they will always exist.
        this._nameRegister = [ GlobalEvents.COMPONENT ];
    }

    /**
     * Locates a registered handler by name, or undefined if not found
     *
     * @param {string} handlerName the name of the event handler
     * @returns {EventHandler | undefined} handler information or undefined
     * @memberof FixtureInstance
     * @private
     */
    private findHandler(handlerName: string): EventHandler | undefined {
        return this._eventRegister.find(eh => eh.handlerName === handlerName);
    }

    /**
     * Adds event names to the names registry of the event bus.
     *
     * @param {string | Array} names event names or names to register
     * @memberof EventBus
     */
    registerEventName(names: string | Array<string>): void {
        const arrr = Array.isArray(names) ? names : [names];
        arrr.forEach(n => {
            // don't add if name is already registered
            if (this._nameRegister.indexOf(n) === -1) {
                this._nameRegister.push(n);
            }
        })
    }

    /**
     * A list of event names that have been registered with the bus.
     *
     * @returns {Array} list of event names
     * @memberof EventBus
     */
    eventNames(): Array<string> {
        return this._nameRegister.slice();
    }

    // TODO provide a method to unregister an event name? would that ever really need to happen?

    /**
     * Adds an event handler to an event.
     *
     * @param {string} event name of the event to react to
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof EventBus
     */
    on(event: string, callback: Function, handlerName: string = ''): string {
        // check if name already registered
        if (this.findHandler(handlerName)) {
            // TODO decide if we are replacing, erroring, do nothing + console warn?
            throw new Error('Duplicate handler name registration: ' + handlerName);
        }

        if (!handlerName) {
            handlerName = event.replace(/\//g, '_') + this._funCounter.toString();
            this._funCounter++;
        }

        // track the event, register with main event bus
        const eh = new EventHandler(event, handlerName, callback);
        this._eventRegister.push(eh);
        this._eventBus.$on(event, callback);

        return handlerName;
    }

    /**
     * Removes an event handler from an event.
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof EventBus
     */
    off(handlerName: string): void {
        // TODO support other overloads? like event name + handler function?
        // TODO handle the "off all" scenario?
        // TODO support "turn off all handlers for an event?".
        //      This is a bit tricky as it also uses a 1 string param sig.
        //      Could use a diff method, like .allOff(event)

        // check if name exists. if not... do nothing? console warn? error?
        const eh = this.findHandler(handlerName);

        if (eh) {
            // remove from event bus and the registry
            this._eventRegister.splice(this._eventRegister.indexOf(eh), 1);
            this._eventBus.$off(eh.eventName, eh.handlerFunc);
        }

        // TODO case where no handler was found. do nothing? console warn? error?
        //      for now just exit. the goal was achived (non-existing handler will no longer react)
    }

    /**
     * Triggers an event.
     *
     * @param {string} event the name of the event
     * @param {...any[]} args any arguements the event is expecting
     * @memberof EventBus
     */
    emit(event: string, ...args: any[]): void {
        // TODO any checking that event exists? or we just agree it is global bus fun
        this._eventBus.$emit(event, ...args);
    }

    /**
     * Returns any active event handler names for an event.
     *
     * @param {string} event name of the event
     * @returns {Array} handler names for the given event
     * @memberof EventBus
     */
    activeHandlers(event: string): Array<string> {
        // TODO add a filter if we implement disabled events
        return this._eventRegister.filter(eh => eh.eventName === event).map(eh => eh.handlerName);
    }

    /**
     * Returns a list of event names known to exist on the bus.
     *
     * @returns {Array} event names for the fixture
     * @memberof EventBus
     */
    availableEvents(): Array<string> {
        return this._nameRegister;
    }

    // TODO if this design is accepted, implement .once as well.
    //      will likely need a wrapper function so we can detect when the call executed and remove it
    //      from the registry

}