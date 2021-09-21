export class TreeNode {
    layerIdx: number;
    name: string;
    children: Array<TreeNode>;
    isLayer: boolean; // false for groups. effectively a shortcut for `children.length === 0`
    uid: string;

    constructor(idx: number, uid: string, name: string = '', isLayer: boolean = true) {
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
            let hit: TreeNode | undefined;

            // using .some will cause the loop to stop when it gets a hit
            this.children.some(t => {
                return (hit = t.findChildByUid(uid));
            });

            // return nothing, or the bubbled up tree node, not the child (t) that was being iterated on
            return hit;
        }
    }

    // returns a tree node in the tree that has the given layer index.
    // returns undefined if nothing found
    findChildByIdx(idx: number): TreeNode | undefined {
        if (this.layerIdx === idx) {
            return this;
        } else {
            let hit: TreeNode | undefined;

            // using .some will cause the loop to stop when it gets a hit
            this.children.some(t => {
                return (hit = t.findChildByIdx(idx));
            });

            // return nothing, or the bubbled up tree node, not the child (t) that was being iterated on
            return hit;
        }
    }
}
