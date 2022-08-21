// function createQueue() {
//   const queue = [];
//   return {
//     enqueue(item) {
//       return queue.unshift(item)
//     },
//     dequeue() {
//       return queue.pop()
//     },
//     peek() {
//       return queue[queue.length - 1]
//     },
//     get length() {
//       return queue.length;
//     },
//     isEmpty() {
//       return queue.length === 0;
//     }
//   }
// }

// const q = createQueue();
// q.enqueue('first commit');
// q.enqueue('second commit');
// q.enqueue('third commit');
// q.dequeue();

// console.log(q.length);
// console.log(q.peek());


function Queue() {
  this.queue = {};
  this.tail = 0;
  this.head = 0;
}

// Add an element to the end of the queue.
Queue.prototype.enqueue = function(element) {
  this.queue[this.tail++] = element;
}

// Delete the first element of the queue.
Queue.prototype.dequeue = function() {
  if (this.tail === this.head)
      return undefined

  var element = this.queue[this.head];
  delete element;
  return element;
}

const q = new Queue();
console.log(q.enqueue(1))
console.log(q)

// q.enqueue('first commit');
// q.enqueue('second commit');
// q.enqueue('third commit');
// q.dequeue();

// Notes:

// 1.A queue is a linear structure of sequential and ordered elements, similar to a stack, with a difference that it works based on the principle of first in first out (FIFO).

// A queue data structure has two fundamental operations:

// 1.1)enqueue—This operation is responsible for inserting or pushing a new element to the queue.
// 1.2)dequeue—This operation is responsible for removing the oldest element from the queue.

//2) remember that both the push and pop methods have a time complexity of O(1)? The shift method has a time complexity of O(n).