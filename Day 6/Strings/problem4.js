let arr= [1,2,-70,3,-30,4,5];
// max =5 , index= 6
// min = -70, index= 2

// find the indexes of max and min value
// max_index_value= 6
// min_index_value=  2

let min= arr[0]; //1

let max= arr[0] //1

for(let i=0;i<arr.length;i++){
  if(arr[i]<min){
    min=arr[i];
  }
  if(arr[i]>max){
    max= arr[i];
  }
}

console.log(max,min)