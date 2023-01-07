let students= ["goku","gohan","piccalo","chichi"];
let score= [40,34,32,67];
//convert this above arrays into below format.
// [
//   {name:"goku", score:40},
//   {name:"gohan",score:34},
//   {name:"piccalo", score:32},
//   {name:"chichi", score:67} 
// ]

let result= [];

for(let i=0;i<students.length;i++){
  let obj={};
  obj.name= students[i]; // adding into object from array of studetns
  obj.score= score[i]; // adding into object from array of score;

result.push(obj);  
}
console.log(result);