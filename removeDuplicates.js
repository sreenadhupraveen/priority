// remove the duplicates array of numbers & strings

// solution 1
var testNums = [1, 2, 3, 1];
var testStrs = ['a','b','c','a']
var uniqueNums = [];
var uniqueStrs = [];

for (var i of testNums) {
  if (uniqueNums.indexOf(i) === -1) uniqueNums.push(i);
}

for (var i of testStrs) {
    if (uniqueStrs.indexOf(i) === -1) uniqueStrs.push(i);
  }

console.log(uniqueNums, 'uniqueNums');
console.log(uniqueStrs, 'uniqueStrs');


//solution 2

console.log(new Set(testNums));


//solution 3

// 'abcd' -> 'abcd'

  const dupStr = 'abcdaa';
  var uniqueStr = [];
  function removeDupes(str){
    const chars = str.split('');

    for(var j of chars){
      if(uniqueStr.indexOf(j) === -1){
        uniqueStr.push(j)
      }
    }
    return uniqueStr.join('');
  }


  console.log(removeDupes(dupStr), 'removesupes')
