/* Implementing Stack features like:
push
pop,
peek,
size,
isEmpty,
print
*/

class Stack {

  constructor() {
    this.items = []
  }

  push(element){
    this.items.push(element);
  }

  pop(){
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length-1];
  }

  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.items.length === 0;
  }

  print(){
    console.log(this.items.toString());
  }
  
}

const stack = new Stack();
console.log(stack.isEmpty());  // true

stack.push(20); // [20]
stack.push(30); // [20, 30]
stack.push(15); // [20, 30, 15]

console.log(stack.items); // [20, 30, 15]
console.log(stack.pop()); // 15
console.log(stack.peek()); // 30
stack.print();             // 20, 30