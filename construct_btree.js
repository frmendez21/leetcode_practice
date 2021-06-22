function buildTree(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;


    let r = preorder.shift();
    let root = new TreeNode(r);
  
    let rIdx = inorder.indexOf(r);
    let leftInOrder = inorder.slice(0, rIdx);
    let rightInOrder = inorder.slice(rIdx + 1);

    root.left = buildTree(preorder, leftInOrder);
    root.right = buildTree(preorder, rightInOrder);

    return root;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))