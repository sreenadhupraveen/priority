class Queue{
  constructor(){
    this._storage = {};
    this._firstIndex=0;
    this._lastIndex=0;
  }


  enqueue(item) {
    this._storage[this._firstIndex] = item;
    this._firstIndex++;
    console.log(this._storage , 'enqueue');
  }

  dequeue() {
    if(this.size === 0) {
        console.warn('Attempting to dequeue from an empty queue');
        return undefined;
    }
  
    const itemToReturn = this._storage[this._firstIndex];
    delete this._storage[this._firstIndex];
    this._firstIndex++;
    return itemToReturn;
}
  
  get size() {
    return this._lastIndex - this._firstIndex;
  }

}


const test = new Queue();
test.enqueue(1);
test.enqueue(3);
test.enqueue(5);
test.dequeue();
console.log(test);