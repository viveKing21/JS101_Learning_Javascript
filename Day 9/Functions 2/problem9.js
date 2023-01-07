
let arr=["goku","gohan", "vegita", "naruto"];

// reverse a string
function reverse(b){
let bag= "";
for(let i= b.length-1;i>=0;i--){
  bag= bag+ b[i];
}
 return bag; 
}

let arr2= [];
for(let i=0;i<arr.length;i++){
   let result= reverse(arr[i]);
  arr2.push(result);
}
console.log(arr2)
// ["ukog", "nahog","atigev","oturan"]; ==> output

