
let str= "masai school" // find how many words are there in a string.

// "hi everyone how are you all"

let space= 0;
for(let i=0;i<str.length;i++){

  if(str[i]== " "){
    space++;
  }
}

console.log("words:",space+1);

