// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********
for(let horizontal=1; horizontal<=10;horizontal++){
    let a= "";
    for(let vertical=1; vertical<=10;vertical++){
      if(horizontal==1 ||horizontal==10){
        a= a+"*";
      }
      else if(vertical==1 || vertical==10){
        a= a+ "*";
      }
      else{
        a= a+ " ";
      }
    }
    console.log(a);
  }