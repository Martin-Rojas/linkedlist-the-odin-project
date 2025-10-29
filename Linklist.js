import { Node } from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null; // start of the list
    this.tail = null; // get the last node of list
  }

  /**  adds a new node containing value to the start of the list */
  prepend(value) {
    // Create new element with the new value
    let newNode = new Node(value);
    // Check if the line is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nodeNext = this.head; // new node points to old head
      this.head = newNode; // new node becomes the new head
    }
  }

  /* Adds a new node containing value to the end of the list*/
  append(value) {
    let newNode = new Node(value); // create new Node
    // Check if list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head; // set currentNode to the first Node

      while (currentNode !== null) {
        // if the pointer point to null
        if (currentNode.nodeNext === null) {
          currentNode.nodeNext = newNode; // points to new node
          this.tail = newNode; // newNode becomes tials
          currentNode = currentNode.nodeNext; // currentNode becomes next node on list
        }
        currentNode = currentNode.nodeNext; // move to next node
      }
    }
  }
  /*returns the total number of nodes in the list*/
  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.nodeNext;
    }
    return size;
  }

  /* Returns the first node in the list*/
  getHead() {
    if (this.head === null) {
      return "List empty";
    }
    return this.head.value;
  }

  /** tail returns the last node in the list */
  getTail() {
    if (this.head === null) {
      return " List empty";
    }
    return this.tail.value;
  }

  /** returns the node at the given index */
  getAt(index) {
    let currrentNode = this.head;
    let currentIndex = 1; // set list index to 0
    // Iterates the list
    while (currrentNode !== null) {
      // Get error if index is out of list range
      if (currrentNode.nodeNext === null) {
        console.log(`index out of range`);
      }
      if (currentIndex === index) {
        // Check if index match
        return currrentNode.value; // return the value of node
      }

      currrentNode = currrentNode.nodeNext; // Get the next node of list
      currentIndex += 1; // update the list index
    }
  }

  // Removes the last element from the list
  pop() {
    // If list is empty
    if (this.head === null) return null;
    // Check if there is only one node
    if (this.head.nodeNext === null) {
      const valueRemoved = this.head.value; // Save value removed
      this.head = null; // Delete the only node
      return valueRemoved; // Return the value removed it
    }

    // Find the second-to-last node
    let current = this.head;

    // Get the second-to-last node
    while (current.nodeNext.nodeNext !== null) {
      current = current.nodeNext;
    }
    // console.log("display the second to last: "+ current);
    const valueRemoved = current.nodeNext.value; // store value of last node
    current.nodeNext = null; // unlink the last node
    return valueRemoved;
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
