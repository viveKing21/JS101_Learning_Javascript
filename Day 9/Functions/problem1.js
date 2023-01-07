let arr= [1,2,3,4,1,2,3,4,5,6,7,8];

// 1. converting this arr into object with their occurancies

let obj= {};

for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]== undefined){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}

// console.log(obj);

for(let q in obj){
  if(obj[q]%2==1){
    delete obj[q];
  }
}

console.log(obj)