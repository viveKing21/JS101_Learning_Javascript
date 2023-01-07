let student1 = {name:"luffy", age:20, location:"hyd"};
let student2= {name:"goku", age:90, location:"delhi"};
let student3= {name:"goku", age:90, location:"delhi"};


let student=[
  {name:"luffy", age:20, location:"hyd"},
  {name:"goku", age:90, location:"delhi"},
  {name:"goku", age:90, location:"delhi"}
]

for(let i=0;i<student.length;i++){

  console.log(student[i].name); // dot notation 
  console.log(student[i]["location"]); // bracket notation.
}