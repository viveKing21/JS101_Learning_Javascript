//write a function which should take a number return true or false,
// if it is even return true, if is odd return false

function Check_even_or_odd(number){

    if(number%2==0){
      return true;
    }
    else{
      return false;
    }
  }
  
  // find the count of even number in the given array.
  let arr= [1,2,3,4,5,6,7,8,9,10];
  //o. declare a variable count.
  //1. run a for loop.
  //2. call the function --> it the result is true--> count++;
  //3. console.log(count);
  
  let count=0;
  for(let i=0;i<arr.length;i++){
  
    let result= Check_even_or_odd(arr[i])
    if(result== true){
      count++;
    }
  }
  console.log(count);
  
  
  
  
  
  
  
  
  
  
  // for(let i=1; i<=5; i++){
  //   let result= Check_even_or_odd(i)
  //   if(result== true){
  //     console.log(i, "even");
  //   }
  //   else{
  //     console.log(i, "odd");
  //   }
  // }