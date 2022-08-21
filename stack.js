class stack{

  constructor(){
    this.count = 0;
    this.storage = {};
  }


  push =  function(value){
    this.storage[this.count] = value;
    this.count++
    console.log(this.storage);
  }

  pop = function(){
    if(this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    console.log(this.storage);
    return result;
  }
}


var myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();


// Notes:
// 1.A stack normally is a structure of sequential and ordered elements and it’s based on the principle of last in first out (LIFO). 
// 2.Some developers like to implement stack data structures using linked lists instead of arrays in JavaScript. Although this might feel like a clever solution, the performance might not be the best one.

// 3.As Hyunjae Jun pointed out here, the performance of arrays instead of linked lists in stack data structures is better.

// 4.There are some specific cases where linked lists can perform better than arrays, but when implementing stack data structures in JavaScript, always prefer arrays. The array methods that you are going to use, push and pop, will have a time complexity of O(1), which means that they will run efficiently and will have the best performance possible.
