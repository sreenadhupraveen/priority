class Queue {
  constructor(){
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data)
  }

  dequeue(){
    this.queue.shift();
  }
}


const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();

console.log(myQueue);