let person=[];
let points=new Array(23,34); //another way of declaring array
//assigning values;
person[0]='Varun';
person[1]='Jeson';
person[2]='Don';
//add values using push()
person.push('Imran');
//sort array elements
person.sort();
for(let k of person)
console.log(k);
console.log(Array.isArray(person)?'Its an Array':'Not an Array');