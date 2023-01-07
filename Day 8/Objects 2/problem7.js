let arr= [3,4,5,6,7,3,4,5];

//print the elements whose occurance is 2 or more;

// 1. convert array into object, we we can find the occurance of each element.==> for loop

//   2. check which number is present only one time inside the object.==> for in loop.

// 3. print the number which have only 1 occurance 


// 1
let obj= {};
for(let i=0;i<arr.length;i++){
  if(obj[arr[i]]== null){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]++;
  }
}

// console.log(obj);

// 2
for(let u in obj){
  if(obj[u]>=2){
    console.log(u);// key 
    console.log(obj[u]) //value
  }
}

// occure1 occure2 occure2 or more.