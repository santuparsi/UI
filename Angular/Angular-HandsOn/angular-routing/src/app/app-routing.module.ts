import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},//setting the root path
  {path:'welcome',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
