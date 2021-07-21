import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
public item:Student;
cities=["Bangalore","Cheenai","Hyderabad","Pune","Mumbai"]
  constructor() {
    this.item=new Student(0,'',0,'');
   }

  ngOnInit(): void {
  }

}
