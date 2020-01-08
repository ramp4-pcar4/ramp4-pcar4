// a very naughty class indeed.
// a promise that can be resolved from outside. aka a Deferred.
// serves as a nice "i am loaded" indicator on layers, and maybe other applications.
// e.g. caller code wants to use a layer property that is not guaranteed until after load.
//      way without this:
//                      if (layer.loaded) {do stuff with layer.property}
//                      else {layer.listenForLoadedEvent(handlerFunction(() => {do stuff with property}))}
//      way with this:
//                      layer.naughtyLoadPromise.then(() => { do stuff with property});
//
// yes, yes, very bad and all -- show me a better solution and I'll consider it.

export default class NaughtyPromise {

    protected realPromise: Promise<void>;

    resolveMe(): void {
        // i do nothing as i get overwritten;
    }

    rejectMe(): void {
        // i do nothing as i get overwritten;
    }

    getPromise(): Promise<void> {
        return this.realPromise;
    }

    constructor () {
        this.realPromise = new Promise((resolve, reject) => {
            // we map the internal functions to our external methods, allowing outsiders to call them.
            this.resolveMe = resolve;
            this.rejectMe = reject;
        });
    }

    // TODO this works in babel tester. if we find scoping issues, look into using .bind function.  arrow functions should be handling this.
}