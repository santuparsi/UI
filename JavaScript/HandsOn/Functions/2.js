function GetObj()
{
    let obj={Eid:1,Ename:'Khan'}
    return obj;
}
let obj=GetObj();
console.log(obj.Eid+' '+obj.Ename)
function GetArray()
{
    return [
        "Rose","Lilly",'Jasmine','Tulips'
    ]
}
for(let k of GetArray())
{
    console.log(k)
}
function GetEmployees()
{
    return [
{Eid:1,Ename:'Rohan'},
{Eid:2,Ename:'Khan'},
{Eid:3,Ename:'Don'},
{Eid:4,Ename:'Robert'}
    ];
}