import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb-demo1',
  templateUrl: './pb-demo1.component.html',
  styleUrls: ['./pb-demo1.component.css']
})
export class PbDemo1Component implements OnInit {

  title='Welcome to Angular DataBindig Session'
  path='http://www.google.co.in'
  imgpath='../assets/Koala.jpg'
  a=400;
  b=400;
  constructor() { }

  ngOnInit(): void {
  }

}
