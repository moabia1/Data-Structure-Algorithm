let prompt = require('prompt-sync')()

class Node{
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Tree{
  buildTree() {
    let data = prompt("enter number")
    if (data == -1) return null;
    let root = new Node(data)
    console.log("Enter left data of "+ root.val)
    root.left = this.buildTree()
    console.log("Enter right data of " + root.val);
    root.right = this.buildTree()

    return root
  }

  preOrder(root) {
    if (root == null) return
    process.stdout.write(root.val + " ")
    this.preOrder(root.left)
    this.preOrder(root.right);
  }
  postOrder(root) {
    if (root == null) return
    this.postOrder(root.left)
    this.postOrder(root.right)
    process.stdout.write(root.val + " ")
  }
  inOrder(root) {
    if (root == null) return
    this.inOrder(root.left)
    process.stdout.write(root.val + " ")
    this.inOrder(root.right)
  }
}
let t = new Tree()
let root = t.buildTree()
t.preOrder(root)