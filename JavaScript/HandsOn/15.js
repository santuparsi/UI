//class declaration
class Student
{
    constructor() //constructor
    {
        this.Sid=1;
        this.Sname='Rohan';
    }
    show() //method
    {
        console.log(`ID:${this.Sid} Name:${this.Sname}`)
    }
}
let student=new Student();
student.show();
student.Sid=2;
student.Sname='Charan';
student.show();