// checkeven(1);
// checkeven(2);
// checkeven(3);
// checkeven(4);
// checkeven(5);



function checkeven(number){
    if(number%2==0){
    console.log(number,"even");
    }
    else{
      console.log(number,"odd");
    }
  }
  
  for(let i=1; i<=10;i++){
    checkeven(i);
  }
  
  
  