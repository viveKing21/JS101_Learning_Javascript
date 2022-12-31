
// given a array, find the count of words whose characters starting with g;

let arr= ["goku", "gohan", "gon","luffy","google", "oogle", "nami"];


let count=0;
for(let i=0;i<arr.length;i++){

  if(arr[i][0]== "g"){
    count++;
  }
}

console.log(count);