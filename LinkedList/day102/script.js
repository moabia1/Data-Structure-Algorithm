// Question -- 1 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 25
// Reverse k Group Nodes Linked list
class LinkedList{
  constructor() {
    this.head = null
    this.size = 0;
  }

  add(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode;
      return
    }
    this.size++
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  print() {
    if (this.head == null) {
      console.log("empty list");
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "-> ");
      temp = temp.next;
    }
    console.log("null");
  }
}
class Node{
  constructor(val) {
    this.val = val
    this.size = null
  }
}
let printLL = (head) => {
  if (head === null) return console.log("empty list");
  let temp = head
  while (temp != null) {
    process.stdout.write(temp.val + "-> ");
    temp = temp.next;
  }
  console.log("null");
}

let data = new LinkedList();
data.add(5)
data.add(2)
data.add(6)
data.add(5)
data.add(9)
data.add(8)
printLL(data.head);

let data1 = new LinkedList();
data1.add(6)
data1.add(4)
data1.add(2)
data1.add(1)
let reverse = (start, end) => {
  let curr = start, prev = null;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr
    curr = temp;
  }
  return prev
}

// let reverseKGroup = (l1,k) => {
//   let start = l1;
//   let end = l1;
//   for (let i = 0; i < k; i++){
//     if (end === null) {
//       return l1
//     }
//     end = end.next
//   }
//   let newNode = reverse(start, end)
//   start.next = reverseKGroup(end, k)
//   return newNode
// }

// let ans = reverseKGroup(data, 2);
let addTwoNumber = (l1, l2) => {
  let dummy = new Node(-1);
  let temp = dummy
  let carry = 0;
  while (l1 != null || l2 != null) {
    let val1 = (l1 === null) ? 0 : l1.val;
    let val2 = (l2 === null) ? 0 : l2.val;
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    let newNode = new Node(sum % 10)
    temp.next = newNode;
    temp = temp.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    temp.next = carry
  }
  return dummy.next;
}
let add = addTwoNumber(data.head, data1.head);
printLL(add);