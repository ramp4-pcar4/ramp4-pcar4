
export default class TreeNode {
    layerIdx: number;
    name: string;
    childs: Array<TreeNode>;
    isLayer: boolean; // false for groups. effectively a shortcut for `childs.length === 0`
    uid: string;

    constructor (idx: number, uid: string, name: string = '', isLayer: boolean = true) {
        this.layerIdx = idx;
        this.name = name;
        this.isLayer = isLayer;
        this.childs = [];
        this.uid = uid;
    }

    // returns a tree node in the tree that has the given uid.
    // returns undefined if nothing found
    findChildByUid(uid: string): TreeNode {
        if (this.uid === uid) {
            return this;
        } else {
            return this.childs.find(t => t.findChildByUid(uid));
        }
    }

    // returns a tree node in the tree that has the given layer index.
    // returns undefined if nothing found
    findChildByIdx(idx: number): TreeNode {
        if (this.layerIdx === idx) {
            return this;
        } else {
            return this.childs.find(t => t.findChildByIdx(idx));
        }
    }

}