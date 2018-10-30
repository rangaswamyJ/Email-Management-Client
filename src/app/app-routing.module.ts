import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsgDescComponent } from './home/msg-desc/msg-desc.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './feedbackClient/login/login.component';
import { FeedbackComponent } from './feedbackClient/feedback/feedback.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"message/:id",
        component:MsgDescComponent
      },
      {
        path:"message",
        component:MsgDescComponent,
      },
    ]
  },
  {
    path:"feedback/register",
    component:LoginComponent
  },
  {
    path:"feedback/feedback",
    component:FeedbackComponent
  },
  {
    path:"**",
    component:Error404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
