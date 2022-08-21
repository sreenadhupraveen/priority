class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this._length = 0;
  }
  
  addToTail(item) {
      const newNode = {
          value: item,
          next: null
      };
    
      if(this._length === 0) {
          this.head = newNode;
      } else {
          this.tail.next = newNode;
      }
      
      this.tail = newNode;
      this._length++;
  }

  removeFromHead() {
      if(this._length === 0) {
          console.warn('Attempting to remove from an empty list');
          return undefined;
      }
    
      const itemToReturn = this.head.value;
      this.head = this.head.next;
      this._length--;
      return itemToReturn;
  }

  get size() {
      return this._length;
  }
}


const test = new LinkedList();
test.addToTail(1);
console.log(test, '111');
test.addToTail(3, '222');
console.log(test, '333');
test.addToTail(5);
console.log(test,'444');
test.removeFromHead()
console.log(test,'555');