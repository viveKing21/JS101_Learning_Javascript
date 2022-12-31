let details= {
    name: "luff",
    age: 22,
    address: "hyderabad",
    phone: 12346,
    father_name: "dragon",
    mother_name: "nami",
  };
  
  
  // if you want to iterate over all the elements inside the object you need to use for...in loop
  
  for(let x in details){
    console.log(x); // all the keys inside the object
    
  console.log(details[x]); // it will give you all the values in the object.
  
    console.log(x, details[x]);
  }