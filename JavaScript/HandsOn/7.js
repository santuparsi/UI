let M1=8,M2=9,M3=67;
let total=M1+M2+M3;
let avg=total/3;
let result='';
if(avg>=70)
result='Distinction';
else if(avg>=60 && avg<70)
result="FirstClass";
else if(avg>=50 && avg<60)
result= "SecondClass";
else if(avg>35 && avg<50)
result="ThirdClass";
else
result="Fail"
console.log(`Result:${result} Marks:${total} Avg:${avg}%`)