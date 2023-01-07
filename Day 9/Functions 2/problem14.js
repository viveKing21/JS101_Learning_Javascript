// write a function to convert or replace space in a word with - ;
// let str= "hello every"  // hello-every <==output.

function convert(str){
    let y= "";
    for(let i=0;i<str.length;i++){
      if(str[i]==" "){
        y= y+"-"
      }else{
        y= y+str[i];
      }
    }
    console.log(y);
    }
    
    convert("hello everyone");
    convert("i hope everyone is doing good");
    convert("have a great weekend");
    