
// find the sum of element whose occurance is greater than or equal to 2;

let arr=[1,2,1,2,1,2,3,4,3,4,5,6,5];

let obj= {};
for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]== null){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}

let sum=0;
for(let t in obj){

  if(obj[t]>=2){
    sum= sum + Number(t);
  }
}
console.log(sum);