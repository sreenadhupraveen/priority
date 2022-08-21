class stack {
  constructor(){
    this.stack = [];
  }

  push(data) {
    this.stack.push(data)
  }
  
  pop(){
    this.stack.pop();
  }
}


const myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

myStack.pop();

console.log(myStack);
