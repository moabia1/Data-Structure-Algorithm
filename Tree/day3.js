// Ques:1 Diameter of Binary Tree (Leetcode:- 543)
function diameterOfTree(root) {
  let ans = 0
  function solve(root) {
    if (root == null) return 0
    let left = solve(root.left);
    let right = solve(root.right);
    ans = Math.max(ans, left + right);
    return Math.max(left,right)+1
  }
  solve(root)
  return ans
}



// Ques:2 Left view Of a Binary Tree (GFG)
function solve(root, level, ans) {
  if (root == null) return 
  if (level == ans.length) ans.push(root.val);
  solve(root.left, level + 1, ans)
  solve(root.right, level + 1, ans)
  return ans
}
function leftView(root) {
  let ans = []
  if (root == null) return ans;
  return solve(root,0,ans)
}



// Ques:3 Right view of Binary Tree (Leetcode:- 199)
function solve(root,level,ans) {
  if (root == null) return
  if(level == ans.length) ans.push(root.val)
  solve(root.right, level + 1, ans)
  solve(root.left, level + 1, ans)
  return ans;
}
function rightView(root) {
  let ans = []
  if(root == null) return ans
  return solve(root,0,ans)
}

