function check_prime(number){
    // let number= 3;
    
    let factor=0;
    for(let i=1;i<=number;i++){
      if(number%i==0){
        factor++;
      }
    }
    
    if(factor==2){
      return true;
    }else{
      return false;
    }
    
    }
    
    for(let i=1; i<=10;i++){
     let output= check_prime(i); 
     
    if(output== true){
      console.log(i," is a prime");
    }
      else{
        console.log(i," is not a prime");
      }
    }