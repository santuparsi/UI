function f()
{
    console.log('HI');
}
let arr=[12,12.34,'ram',true,{Eid:1,Ename:'Khan'},f];
console.log(arr[2]);
let obj=arr[4];
console.log(obj.Ename);
arr[5]();