/* Implementing Queue features like:
Adding Elements (enqueue)
Remove from Beginning (dequeue),
isEmpty,
peek - First Element of the Queue
size,
print
*/

class Queue {
  constructor(){
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element){
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(){
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty(){
    return this.rear - this.front === 0;
  }
  
  peek(){
    return this.items[this.front];
  }

  size(){
    return this.rear - this.front;
  }

  print(){
    console.log(this.items);
  }
  
}

const que = new Queue();

que.enqueue(4);
que.enqueue(9);
que.enqueue(2);
console.log("items:", que.items);
console.log("size:", que.size());
console.log("first Elem:", que.peek());
que.print();
console.log("is Empty:", que.isEmpty());
console.log("De Queue - Remove First Elem:", que.dequeue());
console.log("items:", que.items);