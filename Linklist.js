import { Node } from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null; // start of the list
  }

  prepend(value) {
    // Create new element with the new value
    let newNode = new Node(value);
    newNode.nodeNext = this.head; // new node points to old head
    this.head = newNode; // new node becomes the new head
  }

  printList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode);
      currentNode = currentNode.nodeNext;
    }
  }
}

export { LinkedList };
