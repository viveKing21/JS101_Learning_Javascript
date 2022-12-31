
// print the sum of all them multiples of 3 from 0 to the given number

// 0- 10 ==>0, 3, 6, 9 =>18

let i=0;
let sum=0
while(i<=10){

  if(i%3==0){
    // console.log(i);
    sum= sum+i;
  }
  i++;
}

console.log(sum);