class SingleLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null; 
  }

  addNode(item){
    const newNode = {
      data: item,
      next: null
    }

    if(!this.head){
      this.tail = newNode;
      this.head = newNode
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAfter(data, toNodeData) { 
    // 23 16 9
    //new node is 23 is insert after 16
 //   data = 23, toNodeData = 16
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = {
          data: data,
          next: null
        }
        if (current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next = node;
          break;
        }
      }
      current = current.next;
    }
  }

  insertAfterTest(data, toNodeData) {
    const current = this.head;
    while(current){
      if(current.data === toNodeData){
        const node = {
          data: data,
          next: null
        }
        node.next = current.next;
        current.next = node;             

      }
    }
  }

  removeNode(data) {
    let previous = this.head; 
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          if(this.head === null){
            this.tail = null;
          } else {
            this.tail = previous;
          }
          
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }

}


const linkedList = new SingleLinkedList();
linkedList.addNode(23);
linkedList.addNode(16);
linkedList.addNode(9);
linkedList.insertAfter(23, 16)
linkedList.removeNode(16)
console.log(linkedList);

