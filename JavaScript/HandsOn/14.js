//string functions
let str='Flowerer are in the Garden';
let k=str[8];//returns char at 8th index
console.log(str.length)
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(3));
console.log(str.charCodeAt(0));
console.log(str.indexOf('n'));
console.log(str.lastIndexOf('n'))
//getting part
console.log(str.slice(0,8));
console.log(str.substring(0,8));
console.log(str.substr(9,3)); //here 3 is the length of char
//Replacing content
let new_str=str.replace("Garden","Pot");
console.log(new_str);
let a="           Hello World!!           "
console.log(a.trim());
let arr=str.split(" "); //split the string into array of strings
arr.forEach(i=>{
    console.log(i);
})