/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
    // NodeFilter.SHOW_ELEMENT：
    // 指定 TreeWalker 只会遍历元素节点（即 HTML 元素），而不包括文本节点、注释节点等。
    const treeWalker = document.createTreeWalker(tree, NodeFilter.SHOW_ELEMENT = true);
    ans = new Set();
    // 初始化为 TreeWalker 的当前节点，即 DOM 树的根节点 tree。
    let cur = treeWalker.currentNode;
    // while (cur) 循环遍历直到 cur 为 null，即遍历完整个 DOM 树。
    while (cur) {
        // 将当前节点的标签名（使用 toLowerCase() 转换为小写形式）添加到 ans 中。这确保了标签名的唯一性和统一性。
        ans.add(cur.tagName.toLowerCase());
        // cur = treeWalker.nextNode()：移动到 TreeWalker 的下一个节点，继续遍历。
        cur = treeWalker.nextNode();
    }
    // Array.from(ans) 将 Set 对象 ans 转换为一个数组，这样最终的返回值就是一个包含所有唯一标签名的数组。
    return Array.from(ans);
}
