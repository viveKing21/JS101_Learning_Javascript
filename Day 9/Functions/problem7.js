// how to check if a number is prime or not.

// if the number has only 2 factor I can say it is prime number.

function check_prime(number){
    // let number= 3;
    
    let factor=0;
    for(let i=1;i<=number;i++){
      if(number%i==0){
        factor++;
      }
    }
    
    (factor==2) ? console.log(number,"prime number") :console.log(number,"not a prime number")
    
    }
    
    
    for(let i=1; i<=10;i++){
      check_prime(i);
    }
    // check_prime(3);
    // check_prime(5);
    // check_prime(6);