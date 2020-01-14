
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
}