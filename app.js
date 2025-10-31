// import { Node } from "./Node.js";
import { LinkedList } from "./Linklist.js";

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

console.log("value romeved: " + list.pop());
console.log(`size of list: ${list.size()}`);
console.log(`After pop() this is the tail of list ` + list.getTail());

console.log(list.contains(`bird`));
console.log(`find in index: ` + list.find(`dog`));

console.log(list.toString());

console.log(list.insertAt(`snake`, 6));
console.log(list.toString());
console.log(`tail = ${list.getTail()}`);

console.log(list.removeAt(6));
console.log(list.toString());
console.log(`tail = ${list.getTail()}`);
