let a= "masai";

let obj= {};

for(let i=0;i<a.length;i++){

  if(obj[a[i]]== undefined){
    obj[a[i]]=1 //adding element into object;
  }
  else{
    obj[a[i]]++; //updating happens
  } 
}

console.log(obj);