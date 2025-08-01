export declare class TreeNode {
    layerIdx: number;
    name: string;
    children: Array<TreeNode>;
    uid: string;
    private isRoot;
    constructor(idx: number, uid: string, name?: string, root?: boolean);
    findChildByUid(uid: string): TreeNode | undefined;
    findChildByIdx(idx: number): TreeNode | undefined;
    /**
     * Returns whether this node is bound to a logical layer.
     *
     * @method isLogicalLayer
     * @returns {boolean} true if the layer is bound to a logical layer.
     */
    get isLogicalLayer(): boolean;
    /**
     * Returns whether this node is a root node.
     *
     * @method isLayerRoot
     * @returns {boolean} true if this node is a root node for this layer.
     */
    get isLayerRoot(): boolean;
}
