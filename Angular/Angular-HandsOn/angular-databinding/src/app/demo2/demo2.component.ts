import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
public item:Employee; //item is the object of Emloyee Class
  constructor() { 
    this.item=new Employee(100,'Rohan',23000,new Date(2021,2,12)) //initialize Employee object

  }

  ngOnInit(): void {
  }

}
