class SinglyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null; 
  }
  
  addNode(data) {
    console.log('addNode');
    const node = new Node(data);
    console.log(this.head,'head');
    console.log(this.tail,'tail');

    if (!this.head) {
      console.log('ifffffffff');
      this.tail = node;
      this.head = node;
    } else {
      console.log('elseeeeeee');
      this.tail.next = node;
      this.tail = node;
    }
  }
}

function Node(data) {
  this.data = data;
  this.next = null;
}



const list = new SinglyLinkedList();
list.addNode(23);
list.addNode(24);
list.addNode(25);
console.log(list);

