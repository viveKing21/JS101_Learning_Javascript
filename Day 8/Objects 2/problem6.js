let arr= [1,2,3,1,2,3,1,2];
//convert this array into a object, this object should have how many times each element in the array present.

//1 using a loop
//2. an empty object.
//3. logic.



let object= {};

for(let i=0;i<arr.length;i++){
  if(object[arr[i]]== null){
    object[arr[i]]=1;
  }
  else{
    object[arr[i]]++;
  }
}

console.log(object);