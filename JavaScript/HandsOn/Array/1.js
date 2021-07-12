//array declaration
let nos=[12,23,34,45,56];
let a=nos[0];
console.log(a);
//override
nos[0]=22;
nos[5]=298; //assing  values to array using index
a=nos[0];
console.log(a);
console.log(nos); //return like an array
//access all values from array
// for(let i=0;i<nos.length;i++)
// {
//     console.log(nos[i]);
// }
//for in
// for(let k in nos) //index of array is assigned to k start from 0
// {
//     console.log(nos[k]);
// }
//for of
for(let k of nos) //value of arrays are assigned to k starting from 0th index
{
console.log(k);
}