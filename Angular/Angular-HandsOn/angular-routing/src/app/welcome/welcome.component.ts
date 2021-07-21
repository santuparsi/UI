import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
uname:string=''
  constructor(private router:Router) { 
    this.uname=localStorage.Uname; //read localstored data
  }

  ngOnInit(): void {
  }
  LogOut()
  {
    localStorage.clear(); //to cleare all local storage data
    this.router.navigateByUrl('/login');
  }

}
