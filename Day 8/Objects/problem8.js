//delete the elements in a object.

let details= {
    name: "luff",
    age: 22,
    address: "hyderabad",
    phone: 12346,
    father_name: "dragon",
    mother_name: "nami",
  };
  
  
  delete details["name"]; // bracket notation.
  
  delete details.age; // dot notation
  
  console.log(details);