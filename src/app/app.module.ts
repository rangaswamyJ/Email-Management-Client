import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { MsgListComponent } from './home/msg-list/msg-list.component';
import { MsgDescComponent } from './home/msg-desc/msg-desc.component';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './feedbackClient/login/login.component';
import { FeedbackComponent } from './feedbackClient/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MsgListComponent,
    MsgDescComponent,
    Error404Component,
    LoginComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
