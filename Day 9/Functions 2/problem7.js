//convert a array into a string.

let arr= [1,2,3];

let n= arr.length;



function array_to_string(arr,n){
//write the code here
  let result= "";
  for(let i=0;i<n;i++){
  result= result + arr[i];
}
console.log(result);
}

array_to_string(arr,n); // test1 
array_to_string([1,2,3,4],4); // test 2
array_to_string([1,2,3,4,5],5); // test 3