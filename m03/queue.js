/*
Queue - FIFO - first in first out,
we can impletement queue by two way - enqueue(enter first item) and dequeue (remove first item) 
we can have two approch [array and linkedlist]
but the array approch are bad. (Why array-based queue is not ideal?

shift() is O(n) 
Every dequeue shifts all elements left)
*/

class Queue {
  constructor() {
    this.element = [];
  }
  enqueue(value) {
    this.element.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.element.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.element[0];
  }
  isEmpty() {
    return this.element.length === 0;
  }
  print() {
    console.log("queue start", this.element.join("->"));
  }
}
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.peek()); // 30
console.log(queue.dequeue()); // 30
queue.print();




console.log("c output",c)