

let number =5 // prime number;

let factors= 0;
for(let i=1; i<= number;i++){

  if(number%i==0){
    factors++;
  }
}
if(factors==2){
  console.log("it is a prime number")
}
else{
  console.log("it is not a prime number")
}