import { Node } from "./Node.js";

let node1 = new Node(10);
let node2 = new Node(29);
let node3 = new Node(9);

let head = node1;
node1.next = node2;
node2.next = node3;


let currentNode = head;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
