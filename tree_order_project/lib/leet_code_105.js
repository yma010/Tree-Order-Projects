// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (!preorder || !inorder || preorder.length <= 0 || inorder.length <= 0) {
    return null;
  }

  const val = preorder.shift();
  const node = new TreeNode(val);
  const index = inorder.indexOf(val);
  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);
  const preOrderLeft = preorder.slice(0, inorderLeft.length);
  const preOrderRight = preorder.slice(inorderLeft.length);

  node.left = buildTree(preOrderLeft, inorderLeft);
  node.right = buildTree(preOrderRight, inorderRight);

  return node;
}
