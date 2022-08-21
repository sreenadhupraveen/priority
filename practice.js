console.log('LinkedList Example')
class LinkedList {
  constructor(){
    this.head= null;
    this.tail=null;
    this._length=0;
  }

  addToTail(item) {
    const newNode = {
      value: item,
      next: null
    }

    if(this._length === 0 ) {
      this.head = newNode;
    }
    else{
      this.tail.next = newNode
    }
    this.tail = newNode;
    this._length++;
  }
  
  removeFromHead(){
    this.head = this.head.next;
    this._length--;
  }
}


const list = new LinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.removeFromHead()
console.log(list);
