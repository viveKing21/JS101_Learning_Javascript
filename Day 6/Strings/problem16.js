let str= "go%.a$."; 
// if you find % ==> h;
// if you find $ ==> n;
// if you find . ==> remove it.
let new_str= "";
for(let i=0;i<str.length;i++){
    
  if(str[i]== "%"){
    new_str= new_str+ "h";
  }
  else if(str[i]== "$"){
    new_str= new_str +"n";
  }
  else if(str[i]== "."){
    new_str=new_str+"";
  }
  else{
    new_str= new_str+str[i];
  }
}
console.log(new_str)