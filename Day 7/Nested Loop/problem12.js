
// Problem 1: Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12

let d=0;
for(let month=1; month<=12; month++){

  if(month==2){
    d= 28;
  }
  else if(month== 4 || month==6 || month==9 || month==11){
    d=30;
  }
  else{
    d=31;
  }
  
  for(let day=1; day<=d; day++){
    console.log(day+"-"+month);
  }
}