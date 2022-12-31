// create--> password->
// upper case, special character, length>6, password does space.


let password= "Luffyonepiece";

let count_special= 0;
let count_upper= 0;
let count_space= 0;
if(password.length<6){
  console.log("password should be having more than 6 characters");
}
else{

  for(let i=0;i<password.length;i++){

    if(password[i]=="$" || password[i]=="%" || password[i]== "@" || password[i]=="&"){
      count_special++;
    }
    else if( password[i]== "A" || password[i]== "B" || password[i]=="C" || password[i]=="L"){
      count_upper++;
    }
    else if(password[i]==" "){
      count_space++;
    }
  }
}


if(count_special==0){
  console.log("please include special characters");
}
else if(count_upper==0){
  console.log("please use atleast one upper case characters");
}
else if(count_space>0){
  console.log("please donot your spaces");
}
else{
  console.log("your password is strong");
}