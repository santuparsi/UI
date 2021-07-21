import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

uname:string='';
pwd:string='';
errmsg:string=''
  constructor(private router:Router) { } //router is the object of Router class

  ngOnInit(): void {
  }
  Validate()
  {
    //assing value to User model object
    let item:User=new User();
    item.uname=this.uname;
    item.pwd=this.pwd;
    if(item.uname=='Suren' && item.pwd=='12345')
    {
      //set local storage value
      localStorage.Uname=item.uname;
      //this.errmsg='Login Successfull';
      //console.log('Login Success');

      //redirect to welcome component
      this.router.navigateByUrl('/welcome') //welcome is the route path

    }
    else
    this.errmsg='Invalid User';
  }

}
