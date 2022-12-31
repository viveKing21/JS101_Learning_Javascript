let a= [1,2,3,-1,-2,-3] //[1,2,3,0,0];
// console.log(a[6]);
// 1. let i=0;

// 2. i< a.length or i<=a.length

// 3. increase i++

//4. logic //output  if(a[i]<0)
 // a[i]=0

for(let i=0;i<=a.length-1;i++){
  if(a[i]<0){
    a[i]=0;
  }
}
console.log(a);