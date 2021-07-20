import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
public fruits=['Banana','Apple','Kiwi','Orange']
public bikes:Bike[];
  constructor() { 
    this.bikes=[
      new Bike('Activa','Honda',98000,50),
      new Bike('Access','Suziki',78000,60),
      new Bike('Pulsar','Bajaj',120000,120)
    ]
  }

  ngOnInit(): void {
  }

}
