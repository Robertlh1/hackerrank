const TreeNode = require('./TreeNode')

function nodeBuilder(arr, i) {
  if (!arr) return null
  i = i || 0

  if (i < arr.length && arr[i] !== null) {
    const node = new TreeNode(arr[i]);
    node.left = nodeBuilder(arr, 2 * i + 1);
    node.right = nodeBuilder(arr, 2 * i + 2);
    return node;
  }

  return null;
}

module.exports = nodeBuilder