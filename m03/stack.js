/**
 * stack = LIFO => last in first out.
 * 3 operation of stack -> push (enter a value), pop( remove last value), peek (see last value)
 * class : when we make a class we can call it's own method by using "this" keyword
 * by call the method using this keyword class understand that it's call her own method
 */

class Stack {
  constructor() {
    this.items = [];
  }
  // o(1)
  push(value) {
    this.items.push(value);
  }
  /*
   when we want to pop a item first notice my arr are empty or not 
   if my arr is empty so we return something like undefine so that i create a IsEmpty method
*/

  pop() {  // o(1)
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {  // o(1)
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  // create isEmpty method
   // o(1)
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print(){
    console.log(this.items)
  }
}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()); //3
stack.print()
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.isEmpty()); // false
console.log(stack.size()); //2
stack.print()