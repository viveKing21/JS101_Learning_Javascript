let details= {
    name: "luff",
    age: 22,
    address: "hyderabad",
    phone: 12346,
    father_name: "dragon",
    mother_name: "nami",
  };
  
  
  
  // only for the object==> for ... in loop
  
  
  for(let abc in details){ // inside the for in loop we only use baracket notaiton and inside bracket notation we will not use string.
  
  console.log(abc) // all the keys in the object
  console.log(details[abc]); // details[a]  it will give me all the values in the object.
  }