function search(numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] === target) {
          return i;
      }
  }
  
  return -1;
}

search([1, 2, 3, 4, 5], 3);

// expected output: 2



function binarySearch(numbers, target) {
  let startIndex = 0;
  let endIndex = numbers.length - 1;

  if(target < numbers[startIndex] || target > numbers[endIndex]) {
      return -1;
  }
  
  while(true) {
      if(numbers[startIndex] === target) {
          return startIndex;
      }
      
      if(numbers[endIndex] === target) {
          return endIndex;
      }
      
      if(endIndex - startIndex <= 1) {
          // indicates the number isn't present
          return -1;
      }
      
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      
      if(target > numbers[middleIndex]) {
          startIndex = middleIndex + 1;
      } else if(target < numbers[middleIndex]) {
          endIndex = middleIndex - 1;
      } else {
          return middleIndex;
      }
  }
}


binarySearch([1, 2, 3, 4, 5], 3);

// expected output: 2