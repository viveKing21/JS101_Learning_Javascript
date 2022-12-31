// 1. reverse an array.

let a= [1,2,3,4,5]; // [5,4,3,2,1];

 // 1. initialisation/ starting point 
   // the starting point should be from last element.
    // console.log(a[4]); let i= a.length-1;
// 2. condition  i>=0;

// 3. logic/ output  lets take a empty array and push element into that array.

// 4.i--;
let b= [];
for(let i=a.length-1; i>=0;i--){
  b.push(a[i]);
}
console.log(b);