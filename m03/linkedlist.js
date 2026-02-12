class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// console.log(head);
// let temp = head;
// while (temp != null) {
//   console.log(temp.value);
//   temp = temp.next;
// }
// listedlist implement

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      //if the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if linkedlist isn't empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  print() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
const list = new LinkedList()
list.append(12)
list.append(11)
list.append(23)
list.print()
