var input = [[1, 2, 3], 4, 5, [6], [7], [8, 9], 10];


function flattern(nestedArray){
  const newArrary = [];

  for(var i =0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];
    if(Array.isArray(thisItem)){
      const flatItem = flattern(thisItem);
      for(let j=0; j < flatItem.length; j++){
        newArrary.push(flatItem[j])
      }
    }
    else {
      newArrary.push(nestedArray[i])
    }
      
  }

  return newArrary;
}

console.log(flattern(input));