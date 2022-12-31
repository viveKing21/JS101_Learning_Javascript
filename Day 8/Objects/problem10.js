

let details= {
    name: "luff",
    age: 22,
    phone: 12346,
    father_name: "dragon",
    mother_name: "nami",
    hobbies: ["anime","pcgames","cricket","football"],
    location: {
      city: "hyderabad",
      state: "telangana",
      pin_code: 500047,
      landmark: "near hospital",
    }
  };
  
  console.log(details.location.state); // telangana
  
  console.log(details["location"]["city"]) // hyderabad
  