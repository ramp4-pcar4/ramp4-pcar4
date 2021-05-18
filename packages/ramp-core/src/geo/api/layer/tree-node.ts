export class TreeNode {
    layerIdx: number;
    name: string;
    children: Array<TreeNode>;
    isLayer: boolean; // false for groups. effectively a shortcut for `children.length === 0`
    uid: string;

    constructor(
        idx: number,
        uid: string,
        name: string = '',
        isLayer: boolean = true
    ) {
        this.layerIdx = idx;
        this.name = name;
        this.isLayer = isLayer;
        this.children = [];
        this.uid = uid;
    }

    // returns a tree node in the tree that has the given uid.
    // returns undefined if nothing found
    findChildByUid(uid: string): TreeNode | undefined {
        if (this.uid === uid) {
            return this;
        } else {
            return this.children.find(t => t.findChildByUid(uid));
        }
    }

    // returns a tree node in the tree that has the given layer index.
    // returns undefined if nothing found
    findChildByIdx(idx: number): TreeNode | undefined {
        if (this.layerIdx === idx) {
            return this;
        } else {
            return this.children.find(t => t.findChildByIdx(idx));
        }
    }
}
