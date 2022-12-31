let arr=[1,2,3,4,5];
let even_count=0;
let odd_count=0;

for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    even_count++;
  }
  else{
    odd_count++;
  }
}

// homework add all the even number and all the odd number 
// find which is greater.

console.log("even:",even_count, "odd:", odd_count);