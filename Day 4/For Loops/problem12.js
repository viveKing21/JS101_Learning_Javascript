
//print the sum of those numbers that are divisible by 2 and 5 in between 1-20 number;

// 1. print 1-20
// 2. number divisible by 2 and 5
// 3. find the sum of them
// 4. print the sum

let sum=0;
for(let i=1; i<=20;i++){

  if((i%2==0) &&(i%5==0)){
    sum= sum+i;
  }
}

console.log(sum);