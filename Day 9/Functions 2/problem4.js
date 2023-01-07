// you are given two numbers,you need to 

// return adding two numbers ==> step1 function
// multiple that additioned number with 2 ==> step2 function
// then divide that multipled number with 2 ==> step3 function
// then subtract that divided number with 1 and print the value => step4 function.
//1.
function add(a,b){
    return a+b;
  }
 let result= add(1,2)
 
 //2
 function multiple(c){
   return c*2;
 }
 let result2= multiple(result);
 
 //3.
 function divide(x){
   return x/2;
 }
 let result3= divide(result2);
 
 function subtract(q){
   console.log(q-1);
 }
 subtract(result3);