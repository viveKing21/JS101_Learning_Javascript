let character= "d" // B

let lower= ["a","b", "c", "d"]; // all the a-z;

let upper = ["A", "B","C","D"];

for(let i=0;i<lower.length;i++){

  if(character== lower[i]){
    character= upper[i];
    
  }
}

console.log(character);