// let n=[1,1,1,1]
// let sum=n.reduce(f,10)
// function f(total,value,index,array)
// {
//     return total+value;
// }
// console.log(sum);
let items=[
    {id:1,name:'Rohan'},
    {id:2,name:'Suren'},
    {id:3,name:'Karan'}
];
let obj=items.reduce(conv,"");

function conv(t,curr)
{
    return {...t,[curr.id]:curr}
}
console.log(obj);