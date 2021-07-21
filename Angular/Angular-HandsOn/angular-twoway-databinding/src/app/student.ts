export class Student {
    public studentId:number;
    public studentName:string;
    public age:number;
    public address:string;
    constructor(studentId:number,sname:string,age:number,addr:string)
    {
        this.studentId=studentId;
        this.studentName=sname;
        this.age=age;
        this.address=addr;
    }
}
