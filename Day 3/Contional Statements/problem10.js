let item_price= 1000;

let money_you_have= 500;

// let me know if you can by the item or not 
// if you can buy the item print "i bought the item" 
// else print "I dont have money" ==> output

if(money_you_have>=item_price){
  console.log("I bought the item")
}
else{
  console.log("I dont have money")
}

if(item_price > money_you_have){
  console.log("I dont have money")
}
else{
  console.log("I bought the item")
}