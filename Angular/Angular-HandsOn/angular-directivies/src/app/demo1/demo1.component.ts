import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
nos:number[]=[1,2,3,4,5,6,7]
selectedNo:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
