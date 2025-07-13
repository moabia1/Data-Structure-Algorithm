class Queue{
  constructor() {
    this.item = []
  }
  offer(val) {
    this.item.push(val);
  }
  poll() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
    }
    this.item.shift();
  }
  isEmpty() {
    return this.item.length == 0;
  }
  printQueue() {
    for (let i = 0; i < this.item.length; i++){
      process.stdout.write(this.item[i] + "_");
    }
  }
}
let obj = new Queue();
obj.offer(10)
obj.offer(20)
obj.offer(40)
obj.offer(60)
obj.poll();
obj.pop();
obj.printQueue();