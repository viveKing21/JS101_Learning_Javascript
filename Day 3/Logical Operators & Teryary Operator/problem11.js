

//find out if the gender age  can get married or not.

// male , 21
// female , 18

// let gender= male
// let age= 20;
// he cannot marry

let gender= "female";
let age = 17;
// they can get married.

if(  ( (gender == "male") &&  (age>=21) )      ||     ( (gender == "female") && (age>=18) )   ){
  console.log(gender,"can get married");
}
else{
  console.log(gender, "cannot get married");
}
