let flipkart= [

    {type: "toy", name:"pens", price: 600, brand:"cello"},
    {type: "toy", name: "batman", price:2000, brand:"MRF"},
    {type: "printer",name:"canon", price:14000, brand:"canon"},
    {type: "toy", name: "pens", price: 200, brand:"parker"}
  ]
  
  
  let query= "pens";
  
  
  for(let i=0;i<flipkart.length;i++){
    if(flipkart[i].name== query){
      console.log(flipkart[i]);
    }
  }