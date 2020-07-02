export enum GlobalEvents {
    /**
     * Fires when a Vue component is registered with `rInstance.component(...)`.
     * Payload: `(id: string)`
     */
    COMPONENT = 'r4/component',

    /**
     * Fires when the map is created
     * Payload: (map)
     */
    MAP_CREATED = 'map/created'
}
