// // Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers.
// // A simple javascript program to introduce a linked list
// 	var head; // head of list

// 	/* Linked list Node. This inner class is made so that
// 	main() can access it */
// 	class Node {
// 		constructor(d)
// 		{
// 			this.data = d;
// 			this.next = null;
// 		} // Constructor
// 	}

// /* method to create a simple linked list with 3 nodes*/
	
// var head = new Node(1);
// var second = new Node(2);
// var third = new Node(3);
// console.log('linked listtttttt');
// console.log(head);
// console.log(second)
// console.log(third);

// /* Three nodes have been allocated dynamically.
// 		We have references to these three blocks as head,
// 		second and third

// 		llist.head	 second			 third
// 			|			 |				 |
// 			|			 |				 |
// 		+----+------+	 +----+------+	 +----+------+
// 		| 1 | null |	 | 2 | null |	 | 3 | null |
// 		+----+------+	 +----+------+	 +----+------+ */

// 		head.next = second; // Link first node with the second node

// 		/* Now next of the first Node refers to the second. So they
// 			both are linked.

// 		llist.head	 second			 third
// 			|			 |				 |
// 			|			 |				 |
// 		+----+------+	 +----+------+	 +----+------+
// 		| 1 | o-------->| 2 | null |	 | 3 | null |
// 		+----+------+	 +----+------+	 +----+------+ */

// 		second.next = third; // Link second node with the third node

// 		/* Now next of the second Node refers to third. So all three
// 			nodes are linked.

// 		llist.head	 second			 third
// 			|			 |				 |
// 			|			 |				 |
// 		+----+------+	 +----+------+	 +----+------+
// 		| 1 | o-------->| 2 | o-------->| 3 | null |
// 		+----+------+	 +----+------+	 +----+------+ */



// console.log(head);
// console.log(second)
// console.log(third);


// ----------------------------

// A simple javascript program for traversal of a linked list
	var head; // head of list

	/* Linked list Node. This inner class is made so that
	main() can access it */
	class Node1 {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}

	/* This function prints contents of linked list starting from head */
	function printList()
	{
		var n = head;
		console.log(n);
		while (n != null) {
			console.log(n.data + " ");
			n = n.next;
			console.log(n);
		}
	}

	/* method to create a simple linked list with 3 nodes*/
	
	
		/* Start with the empty list. */
	

	var head = new Node1(1);
		var second = new Node1(2);
		var third = new Node1(3);

		head.next = second; // Link first node with the second node
		second.next = third; // Link second node with the third node

		printList();


// This code contributed by gauravrajput1



// some operations (such as modifying a certain element) are faster in arrays, while some others (such as inserting/deleting an element in the data) are faster in linked lists.