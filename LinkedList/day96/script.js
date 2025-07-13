class Node{
  constructor(val) {
    this.val = val
    this.size = null;
  }
}
class LinkedList{
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtFirst(val) {
    const newNode = new Node(val)
    this.size++
    if (this.head === null) {
      this.head = newNode
      return
    }
    newNode.next = this.head
    this.head = newNode
  }

  insertAtLast(val) {
    this.size++
    const newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  insertAtIndex(val,index ){
    if (index < 0 || index > this.size) {
      console.log("not possible");
      return
    }
    this.size++
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode
      return
    }
    let temp = this.head
    for (let i = 0; i < index - 1; i++){
      temp = temp.next
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  deleteAtFirst() {
    this.size--
    if (this.head === null) {
      console.log("empty list")
      return
    }
    this.head = this.head.next;
  }

  deleteAtLast() {
    this.size--
    if (this.head === null) {
      console.log("empty already")
      return
    }
    if (this.head.next == null) {
      this.head = null;
      return
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next
    }
    temp.next = temp.next.next;
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return
    }
    if (this.head === null) {
      console.log("empty list")
    }
    this.size--;
    let temp = this.head
    for (let i = 0; i < index - 1; i++){
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  printLL() {
    if (this.head === null) {
      console.log("empty list")
      return
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "->")
      temp = temp.next
    }
    console.log("null");
  }
}

let obj = new LinkedList();
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtLast(40);
obj.insertAtLast(50);
obj.insertAtLast(60);
obj.printLL();
// obj.deleteAtFirst();
// obj.printLL();
// obj.insertAtIndex(49, 2);
obj.deleteAtLast();
obj.printLL();
obj.deleteAtIndex(2);
obj.printLL();
