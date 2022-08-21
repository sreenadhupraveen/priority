function mergeArrays(arr1, arr2) {
  var merged = [];
  var i = 0,
      j = 0;
//Traverse both arrays and insert smaller value from arr1 or arr2
//into result array and then increment that array index.
//If an array is completely traversed, while other one is left then just
//copy all the remaining elements into result array
// [1,5,3],[2,6,4])
  while ((i < arr1.length) && (j < arr2.length)) {
    console.log('while')
      if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
      } else {
          merged.push(arr2[j]);
          j++;
      }

  }
  console.log('after while')
  console.log(merged)
  console.log(i)
  if (i <= (arr1.length - 1)) {
    console.log('if')
      console.log(arr1.splice(0, i));
      console.log(i);
      console.log(arr1);
      merged = merged.concat(arr1);
  } else if (j <= (arr2.length - 1)) {
    console.log('else if')
      arr2.splice(0, j)
      console.log(j);
      console.log(arr2);
      merged = merged.concat(arr2)

  }
  return merged;
}

// function mergeArrays(arr1, arr2){
//   return [...arr1, ...arr2].sort((a,b)=> a-b)
// }
console.log(mergeArrays([9,5,3],[2,4,6]))