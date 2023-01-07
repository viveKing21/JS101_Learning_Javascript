// let a= "c" // small case character;


check_smallcharacter("c");

function check_smallcharacter(a){

let lower= "abcdefghijklmnopqrstuvwxyz";
  let result= false; //no
for(let i=0;i<lower.length;i++){
  if(a== lower[i]){
    // console.log("small case character");
    result= true;
    break;
  }
}
  // console.log(result);
  return result;
}

console.log("hello");
console.log("students");

let output= check_smallcharacter("c");
console.log(output);






// let output= check_smallcharacter("c");

// if(output== true){
//   console.log("small case");
// }
// else{
//   console.log("not a small case");
// }
