// Ques:1 Maximum Depth of Binary Tree  (Leetcode:- 104)
var maxDepth = (root) => {
  if (root == null) return 0
  
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  return Math.max(left, right) + 1;
}



// Ques:2 Binary Tree Level order Traversal (Leetcode:- 102)

let levelOrder = (root) => {
  let ans = []
  if (root == null) return ans;
  let q = []
  q.push(root)
  while (q.length != 0) {
    let size = q.length;
    let curr = []
    for (let i = 0; i < size; i++){
      let temp = q.shift()
      curr.push(temp.val)
      if (temp.left != null) q.push(temp.left)
      if(temp.right != null) q.push(temp.right)
    }
    ans.push(curr)
  }
  return ans
}

