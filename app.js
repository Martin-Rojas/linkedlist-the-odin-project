// import { Node } from "./Node.js";
import { LinkedList } from "./Linklist.js";

// let node1 = new Node(10);
// let node2 = new Node(29);
// let node3 = new Node(9);

// let head = node1;
// node1.next = node2;
// node2.next = node3;

// let currentNode = head;
// while (currentNode !== null) {
//   console.log(currentNode.value);
//   currentNode = currentNode.next;
// }

// let node1 = new LinkedList();

// console.log("Before any insertion " + node1.getHead());

// node1.prepend(10);
// node1.prepend(19);
// node1.prepend(145);
// node1.append(29);

//node1.printList();

//console.log("Total nodes of list: " + node1.size());

//console.log(node1);

//console.log(node1.getHead());

//console.log(`Tail = ${node1.getTail()}`);

//console.log(`get the node at index ${node1.getAt(5)}`);
// console.log("Total nodes of list: " + node1.size());
// console.log(node1.pop());
// console.log("Total nodes of list after pop 1: " + node1.size());
// node1.pop();
// console.log("Total nodes of list after pop 2: " + node1.size());
// console.log(`print the list /n`);
// node1.printList();

// let nodeList2 = new LinkedList();

// nodeList2.prepend(10);

// nodeList2.printList();

// console.log(nodeList2.pop());

const list = new LinkedList();

list.append("dog");
list.append("rooster");
list.append("donkey");
list.prepend(`cow`);
list.append("cat");
list.prepend(`rat`);
list.prepend(`chicken`);
list.printList();

console.log(`this is the head of list ` + list.getHead());
console.log(`this is the tail of list ` + list.getTail());

console.log(`size of list: ${list.size()}`);
console.log(`get node at index 4: ${list.getAt(4)}`);
