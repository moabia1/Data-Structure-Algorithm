// Question -- 1 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 21
// Merge two sorted linked list

class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(val) {
    let newNode= new Node(val)
    if (this.head === null) {
      this.head = newNode
      return
    }
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  printLL() {
    if (this.head === null) {
      console.log("Empty list")
    }
    let curr = this.head;
    while (curr != null) {
      process.stdout.write(curr.val + "->")
      curr = curr.next;
    }
    console.log("null")
  }
}
let data = new LinkedList();
data.add(2);
data.add(4);
data.add(6);
data.add(8);

let data1 = new LinkedList();
data1.add(3)
data1.add(4)
data1.add(6)
data1.add(7)
data1.add(9)

let printList = (head) => {
  let curr = head;
  while (curr != null) {
    process.stdout.write(curr.val + "->")
    curr = curr.next;
  }
  console.log(null)
}


// const mergeTwoList = (l1,l2) => {
//   let dummy = new Node(-1);
//   let temp = dummy;

//   while (l1 != null && l2 != null) {
//     if (l1.val < l2.val) {
//       temp.next = l1
//       l1 = l1.next;
//     } else {
//       temp.next = l2
//       l2 = l2.next;
//     }
//     temp = temp.next;
//   }

//   while (l1 != null) {
//     temp.next = l1;
//     l1 = l1.next;
//     temp = temp.next;
//   }
//   while (l2 != null) {
//     temp.next = l2;
//     l2 = l2.next
//     temp = temp.next;
//   }
//   return dummy.next;
// }
// let mergedHead = mergeTwoList(data.head, data1.head);
// printList(mergedHead)


// Question -- 2 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 876
// Middle of the Linked List

const mergeTwoListRecr = (l1,l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoListRecr(l1.next, l2)
    return l1;
  } else {
    l2.next = mergeTwoListRecr(l1, l2.next);
    return l2;
  }
}
let ans = mergeTwoListRecr(data.head, data1.head);
printList(ans)






// Question -- 2 *************************************
//      ↓↓↓↓↓↓↓↓↓↓    Lt:- 876
// Middle of the linked list
let middle = (l1) => {
  let fast = l1;
  let slow = l1;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
let mid = middle(data1.head);
//printList(mid)

