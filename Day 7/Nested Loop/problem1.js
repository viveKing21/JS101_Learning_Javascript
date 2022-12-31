
let str= "google";
//oogelg

// 1. divide the given word into half
//  a. goo 
 // b.gle

// 2. reverse this a, b and then join both of them
// a. oog
// b. elg
// 3. oogelg


// 1. i= (str.length/2)-1 //2
// 2. i>=0
// 3. i--
// 4. logic/ output// take an empty string and concatenate


let final= "";

for(let i= (str.length/2)-1; i>=0;i--){
  final= final+ str[i];
}


for(let i=str.length-1 ; i>=(str.length/2); i--){

  final= final +str[i];
}
console.log(final)