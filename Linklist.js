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
  /* Adds a new node containing value to the end of the list*/
  append(value) {
    let currentNode = this.head; // set currentNode to the first Node
    let newNode = new Node(value); // create new Node

    while (currentNode !== null) {
      if (currentNode.nodeNext === null) {
        // if the pointer point to null
        currentNode.nodeNext = newNode; // points to new node
        currentNode = currentNode.nodeNext; // currentNode becomes next node on list
      }
      currentNode = currentNode.nodeNext;
    }
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
