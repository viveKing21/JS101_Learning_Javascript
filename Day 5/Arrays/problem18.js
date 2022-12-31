// Given a character in lower case print the upper case character

// a==> A
//y==> Y
//v ==> V

let lower= ["a", "b", "c", "d","e","f", "g", "h","i", "j","k","l", "m","n","o", "p", "q","r", "s","t", "u","v", "W","x","y", "z"];

let upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N","O", "P", "Q", "R", "S", "T", "U", "V", "W","X","Y","Z"];

let char= "v" //V

for(let i=0; i<lower.length;i++){
  if(char== lower[i]){
    char= upper[i];
    break;
  }
}

console.log(char)