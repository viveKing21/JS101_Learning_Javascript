// Given an array find the unique items in the array


let arr= ["luffy", "gohan",
         "luffy", "gohan", 
         "luffy", "gohan","gon","picalo","nami", "sanji"];



let object= {};

for(let i=0;i<arr.length;i++){

  //1.
  object[arr[i]]= 1;
}

console.log(object);