import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  Ishide=false;
  constructor() { }

  ngOnInit(): void {
  }
  Set()
  {
    if(this.Ishide)
    {
      this.Ishide=false;
    }
    else
    {
      this.Ishide=true;
    }
  }

}
