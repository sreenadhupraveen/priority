function highestFrequency(strings){
  const frequencies = {};
  let maxFrequency = 0;
  let mostFrequentString = strings[0];
  
  for(var i=0; i< strings.length; i++){
    const thisString = strings[i];
    if(frequencies[thisString] === undefined){
      frequencies[thisString]=1;
    } 
    else{
      frequencies[thisString]++
    }

    if(frequencies[thisString] > maxFrequency) {
      maxFrequency = frequencies[thisString];
      mostFrequentString = thisString;
   }
  }
  return mostFrequentString;
}

console.log(highestFrequency(['abc','def','def']));
