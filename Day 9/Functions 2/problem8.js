

// write a function to reverse a string.
// return a value

//1. logic
//2. function ==> return;
//3. store it and console.log();

let str= "naruto" // oturan

function reverse(b){
let bag= "";
for(let i= b.length-1;i>=0;i--){
  bag= bag+ b[i];
}
 return bag; 
}


let arr= ["goku", "gohan", "vegita","mom"];

for(let i=0;i<arr.length;i++){
  let result= reverse(arr[i]);
  if(result== arr[i]){
    console.log("palindrom");
  }else{
    console.log("not a palindrom");
  }
}

// I want you guys to check if in the array if there are any palindroms or not .
 // the array is ['goku',"gohan", "vegita"];
// print it they are palindrom;
// print not a palindrom

