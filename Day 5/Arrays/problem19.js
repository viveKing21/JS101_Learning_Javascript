 // Given an array of numbers find the average of all the even numbers.

// 1.what elements are even ? ==> number %2==0
// 2. how to sum the even nubmer ==> let sum=0; we will add sum at the ouput.
//   3. count the even numbers => let count=0, we will increase the count value when the number is even.
//   4. average=> sum/count

let b= [1,2,3,4,5] //==> 6/2=>3
let sum=0;
let count=0
for(let i=0;i<b.length; i++){
  if(b[i]%2==0){
    sum= sum+ b[i];
    count++;
  }
}
console.log(sum, count)
console.log(sum/count)
