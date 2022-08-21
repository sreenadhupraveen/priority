function mySet() {

  // var collection will hold the set
  var collection = [];

  //this method will check for the pressece of an element and return true or false

  this.has = function(element){
    return (collection.indexOf(element) !== -1)
  }

  // this method wil return all the values in the set
  this.values = function(){
    return collection;
  }


  // this method will add an element to the set
  this.add = function(element) {
    if(!this.has(element)){
      collection.push(element)
    }
  }

  // this method will remove an element from a set
  this.remove = function(element){
    if(this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // this method wil return the union of two sets
  this.union = function(otherSet) {
    var uninSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e){
      uninSet.add(e)
    });
    secondSet.forEach(function(e){
      uninSet.add(e)
    });
    return uninSet
  }

// this method wil returns intersection of two sets as a new set
  this.intersection = function(otherSet){
    var intersectionSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e)
      }
    });
    return intersectionSet;
  }

// this method wil returns the difference of two sets as a new set
   this.differnce = function(otherSet){
    var differnceSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differnceSet.push(e)
      }
    });
    return differnceSet;
  }

  // this method wil test if the set is a subset of different set
  this.subset = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(e){
      return otherSet.has(e)
    })
  }

}

var setA = new mySet();
var setB = new mySet();
setA.add('a');
setA.add('b');
setA.add('c');
setB.add('a');
setB.add('b');
console.log(setA);
console.log(setB);

console.log(setA.subset(setB));
