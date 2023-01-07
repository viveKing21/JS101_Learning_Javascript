// convert a string into an array
// let str= "I am superman" //==>["I", "am", "superman"];

// 1. no space--> add them to the empty string.
//   2. space--> push them to the empty array.
//   3. console.log(arr)

function mySplit(str){
    let arr=[];
    let bag= "";
    for(let i=0;i<str.length;i++){
      if(str[i]!=" "){
        bag= bag+ str[i]; // adding to empty string
      }else{
        arr.push(bag); // put the bag into the arr
        bag= "";
      }
    }
    arr.push(bag); //put the last word into arr.
    console.log(arr);
    }
    
    mySplit("I am doing good");
    mySplit("please work hard");
    
    