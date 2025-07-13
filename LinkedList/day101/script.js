// Question -- 1 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 206
// Reverse a linked list

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
  add(val) {
    let newNode = new Node(val);
    this.size++
    if (this.head === null) {
      this.head = newNode
      return
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  printLL() {
    if (this.head == null) {
      console.log("List is empty");
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "-> ");
      temp = temp.next;
    }
  }
}

let l1 = new LinkedList();
l1.add(6);
l1.add(4)
l1.add(3)
l1.add(2)

let printList = (head) => {
  let curr = head;
  while (curr != null) {
    process.stdout.write(curr.val + "->")
    curr = curr.next;
  }
  console.log(null)
} 


// Question -- 2 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 206
// Reverse a linked list

const reversed = (l1) => {
  let curr = l1;
  let prev = null;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr
    curr = temp;
  }
  return prev
}
let data = reversed(l1.head);
printList(data);




// Question -- 3 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 206
// Linked list cycle
const cyclic = (l1) => {
  if (l1 == null || head.next === null) {
    return false;
  }
  let slow = l1;
  let fast = l1;
  while (fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true
    }
  }
  return false
}




// Question -- 4 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 206
// Remove duplicate from sorted Linked list

const removeDuplicate = (l1) => {
  let temp = l1;
  while (temp != null && temp.next != null) {
    if (temp.val == temp.next.val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next;
    }
  }
  return head
}

