// solition 1

function allAnagrams(strings){
  const sortedStrings = strings.map((str)=> str.split('').sort().join());
  for(var i=0;i<sortedStrings.length;i++){
    if(sortedStrings[i] !== sortedStrings[0]){
      return false;
    }
  }
  return true;
}


console.log(allAnagrams(['abcd', 'bdac', 'cabd']));
console.log(allAnagrams(['abcd', 'bdac', 'csbd']));


// solution 2

function getCharCount(str){
  const charCount={};
  for(var i=0;i<str.length;i++){
    const char = str[i];
    if(charCount[char] === undefined){
      charCount[char]=1;
    }
    else{
      charCount[char]++
    }
  }
}


function allAnagrams(strings){

  if(strings.length === 0){
    return false
  }
  for(let i=0; i<strings.length;i++){
    if(strings[i].length !== strings[0].length){
      return false
    }
  }

  let firstCharCount = getCharCount(strings[0]);
  for(let i=1;i<strings.length;i++){
    const thisCharCount = getCharCount[i];
    for(char in thisCharCount){
      if(firstCharCount[char] !== thisCharCount[char]){
        return false
      }
    }
  }
  return false;

}

console.log(allAnagrams(['abcd', 'bdac', 'cabd']));
console.log(allAnagrams(['abcd', 'bdac', 'csbd']));