class Tree {
  constructor() {
    this.root = null; 
  }

  addNode(data) {
    const newNode = {
      data: data,
      left: null,
      right: null
    }
    if (!this.root) {
      this.root = newNode; 
    } else {
      this.insertNode(this.root, newNode);
    }  
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
         node.right = newNode;
      } else {
         this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }
  
  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      } 
      if (!node.right) {
        node = node.left;
        return node;
      }
      
      let min = this.findMinNode(node.right);
      node.data = min.data;
      node.right = this.removeNode(node.right, min.data);
      return node;
    }
  }
}


const myBinaryTree = new Tree();
myBinaryTree.addNode(20);
myBinaryTree.addNode(10);
myBinaryTree.addNode(30);
myBinaryTree.addNode(5);
myBinaryTree.addNode(2);
myBinaryTree.remove(5)
console.log(myBinaryTree);




// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   addNode(data) {
//     const newNode = {
//       data: data,
//       left: null,
//       right: null
//     }

//     if(!this.root) {
//       this.root = newNode
//     }
//     else{
//       this.insertNode(this.root, newNode)
//     }
//   }

//   insertNode(node, newNode){
//     if(node.data > newNode.data) {
//       if(!node.left) {
//         node.left = newNode;
//       }
//       else{
//         this.insertNode(node.left, newNode)
//       }
//     }
//     else {
//       if(!node.right){
//         node.right = newNode;
//       }
//       else{
//         this.insertNode(node.right, newNode)
//       }
//     }
//   }

//   remove(data){
//     this.removeNode(this.root, data)
//   }

//   removeNode(node, data){
//     if(data < node.data){

//     }
//   }

// }

// const myBinaryTree = new Tree();
// myBinaryTree.addNode(20);
// myBinaryTree.addNode(10);
// myBinaryTree.addNode(30);
// console.log(myBinaryTree);