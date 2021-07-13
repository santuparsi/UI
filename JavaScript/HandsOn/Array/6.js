let arry=[12,23,34,45,56,67,78]
// arry.forEach(i=>{
//     console.log(i);
// })
// let sum=0;
// arry.forEach(i=>{
//     sum=sum+i;
// })
// console.log(sum);
//map()
//let arr1=arry.map(i=>i*2); //squar of array numbers
let arr1=arry.filter(i=>i%2==0); //fetch even values.
arr1=arry.filter(i=>i>50);

arr1.forEach(k=>{
    console.log(k);
})
function f(n)
{
    return n>50;
}
ar1=arry.filter(f);
let k=arry.find(i=>i>35); //return first element in the result array
console.log(k);
