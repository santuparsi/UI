import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
studentName='Rohan'
studentDOB=new Date(2010,10,10)
currency=32434;
obj={"EId":1,"Ename":'Rohan',"Salary":12000}
  constructor() { }

  ngOnInit(): void {
  }

}
