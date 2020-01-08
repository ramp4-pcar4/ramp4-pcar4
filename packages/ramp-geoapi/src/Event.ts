// use <T> thing?
export class GeneralEvent {
    protected listeners: Array<Function>;

    constructor () {
        this.listeners = [];
    }

    /**
     * Triggers the event (i.e. notifies all listeners)
     *
     * @function fireEvent
     * @private
     * @param {...Object} eventParams   arbitrary set of parameters to pass to the event handler functions
     */
    fireEvent (...eventParams: any): void {
        // if we don't copy the array we could be looping on an array
        // that is being modified as it is being read
        this.listeners.slice(0).forEach(l => l(...eventParams));
    }

    /**
     * Register a function to listen to this event.
     *
     * @function listen
     * @param {Function} listenerCallback function to call when the event fires
     * @returns {Function} the input function (for fun and reference)
     */
    listen (listenerCallback: Function): Function {
        this.listeners.push(listenerCallback);
        return listenerCallback;
    }

    /**
     * Remove a listener.
     *
     * @function unlisten
     * @param {Function} listenerCallback function to not call when a filter event happens
     */
    unlisten (listenerCallback: Function): void {
        const idx = this.listeners.indexOf(listenerCallback);
        if (idx < 0) {
            console.error('Attempting to remove a listener which is not registered.');
        } else {
            this.listeners.splice(idx, 1);
        }
    }

    /**
     * Remove a listener.
     *
     * @function listenerCount
     * @returns {Integer} number of listeners registered on the event
     */
    get listenerCount (): number { return this.listeners.length; }
}

export class TypedEvent<T> extends GeneralEvent {
    constructor () {
        super();
    }

    fireEvent(param: T): void {
        super.fireEvent(param);
    }

    listen (listenerCallback: (param: T) => void): (param: T) => void {
        return <(param: T) => void>super.listen(listenerCallback);
    }

    unlisten (listenerCallback: (param: T) => void): void {
        super.unlisten(listenerCallback);
    }

}