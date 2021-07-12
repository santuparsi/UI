function f()
{
    console.log('Welcome to functions');
}
//invoke function
f();
function Greet(name)
{
    console.log('Hello '+name);
}
Greet('Dhoni');
function Add(a,b=10)
{
    let k=a+b;
    console.log(k);
}
Add(2,3);
Add(2);
function Square(a) //retun a value from function
{
return a*a;
}
let result=Square(10);
console.log(result);