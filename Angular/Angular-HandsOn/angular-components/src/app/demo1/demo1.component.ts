import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  //template:'<h1>Angular Supports Iniline Templates</h1>',
  //styles:['h1{color:red}']
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
