
// TODO add proper documentation

// unsure if we need a class.
// attributes are currently just key value pairs. so can just use that unless we need some type of attribute tools, like .clone()
// or some type of events for things changing / reloading

// type Attributes = {[key: string]: any}; // TODO maybe limit 'any' to string & number? some WFS have objects as values, but we really dont support it

// for now just trying to put the def in ApiDefs instead of it's own file.
// resurrect this if we need a proper class for Attributes as considered above.
/*
// experiencing weirdness with building. compiler does not want to generate an Attributes.d.ts file when it's just the interface in this file.
// The class seems to give it a kick.
// Revisit later incase my computer was just being dumb.
class IAmError {
    name: string;
    constructor() {
        this.name = 'Error';
    }
}

interface Attributes {[key: string]: any};

export { IAmError };
export { Attributes };
export default Attributes;
*/