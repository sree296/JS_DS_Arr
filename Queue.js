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
    this.items =[];
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue(){
    return this.items.shift();
  }

  isEmpty(){
    return this.items.length === 0;
  }
  
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }else{
      return null;
    }
  }

  size(){
    return this.items.length;
  }

  print(){
    console.log(this.items.toString());
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
console.log("De Queue - Remove First Elem:", que.dequeue())