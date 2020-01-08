
export default class TreeNode {
    layerIdx: number;
    name: string;
    childs: Array<TreeNode>;
    isLayer: boolean; // false for groups. effectively a shortcut for `childs.length === 0`

    constructor (idx: number, name: string = '', isLayer: boolean = true) {
        this.layerIdx = idx;
        this.name = name;
        this.isLayer = isLayer;
        this.childs = [];
    }
}