
//solution 1

function isUnique(str) {
    for(let i = 0; i < str.length; i++) {
        if(str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
  
    return true;
}



//solution 2

function isUnique(str) {
    const chars = str.split('').sort();

    for(let i = 1; i < chars.length; i++) {
        if(chars[i] === chars[i - 1]) {
            return false;
        }
    }
    
    return true;
}


//solution 3

function isUnique(str) {
    const chars = {};
  
    for(let i = 0; i < str.length; i++) {
        const thisChar = str[i];
    
        if(chars[thisChar]) {
            return false;
        }

        chars[thisChar] = true;
    }

    return true;
}


//solution 4 


function isUnique(str){
    const chars = new Set();
    for(let i=0;i<length;i++){
        const thisChar = str[i];
        if(chars.has(thisChar)){
            return false
        }
        chars.add(thisChar)
    }
}














function isUnique(str) {
    const chars = new Set();
  
    for(let i = 0; i < str.length; i++) {
        const thisChar = str[i];
    
        if(chars.has(thisChar)) {
            return false;
        }

        chars.add(thisChar);
    }

    return true;
}