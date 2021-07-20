import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
// variable declaration
student_id=1
student_name='Rohan'
isStudent=true
age=12;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
