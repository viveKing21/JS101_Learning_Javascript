
// function add(a,b){
//   console.log(a+b);
// }

// add(1,2);

// after adding these two number I want to multiple the result number to 2.
//1. I can't write inside the add() function because it is used to only add two number.
// 2. the above function is only use to print numbers after adding


function add(a,b){
    return a+b;
  }
  
  let result= add(1,2);
  
  //1. return means it will return some value to the calling function , the reason is , we can uset the return value somewhere else.
  
  
  function multiple(c){
    console.log(c*2);
  }
  multiple(result);
  