
let a= "luffy";

let b= "";

for(let i=0;i<a.length;i++){

  if(i==0){
    b= b+"a";
  }
  else{
    b= b+a[i];
  }
}

console.log(b);