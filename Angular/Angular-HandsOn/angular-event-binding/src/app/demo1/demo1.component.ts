import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
user:string=''
imgSrc='../assets/Tulips.jpg'
  constructor() { }

  ngOnInit(): void {
  }
  Greet()
  {
    alert('Hello World..')
    this.user="Sachin"
  }
  ChangePic()
  {
this.imgSrc='../assets/Penguins.jpg'
  }
  SetPic()
  {
this.imgSrc='../assets/Lighthouse.jpg'
  }


}
