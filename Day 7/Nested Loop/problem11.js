 // Print Prime Numbers from 1 to given limit

// 1- 10 
// 2,3,5,7

for(let i=1;i<=10;i++){
    // console.log(i);
  
    let number= i;
  let count=0;
  for(let j=1; j<=number;j++){
    if(number%j==0){
      count++;
    }
  }
  
  if(count==2){
    console.log(i,"prime number");
  }
  else{
    console.log(i,"not a prime number");
  }
  }
  
  
  