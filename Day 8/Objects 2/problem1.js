//create an object with your details


// console.log each and every object element.
// print each and every value inside the object.


//object --key and value


let details= {
    name: "naruto",
    age: 30,
    location: "leaf_village",
    phone:100
  }
  
  delete details["phone"];
  
  console.log(details);
  // console.log(details["name"])// bracket notation.
  
  // console.log(details.age) // dot notation.
  
  // add new details into object
  
  details["hobbie"]= "fighting";
  details.fathername= "minato"
  // console.log(details);
  
  // update the present value in the object.
  details.age= 15;
  
  // console.log(details);