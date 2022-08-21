class node {
  constructor(val){
    this.data = val;
    this.tail = null;
  }
}



var head = new node(1);
var second = new node(2);
var third = new node(3);


head.next = second;

second.next = third;


console.log(head);
console.log(second);
console.log(third);

// function printList()
// {
//   var n = head;
//   console.log(n);
//   while (n != null) {
//     console.log(n.data + " ");
//     n = n.next;
//     console.log(n);
//   }
// }

function printList(){

  var n = head;

  while(n!=null){
    console.log(n.data);
    n = n.next;
  }

}




console.log(printList());


