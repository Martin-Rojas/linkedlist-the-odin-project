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

let node1 = new LinkedList();

console.log("Before any insertion " + node1.getHead());

node1.prepend(10);
node1.prepend(19);
node1.prepend(145);
node1.append(29);

node1.printList();

console.log(node1.size());

console.log(node1);

console.log(node1.getHead());

console.log(`Tail = ${node1.getTail()}`);
