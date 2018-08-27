import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { TopicsComponent } from './topics/topics.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { CommentsListComponent } from './comments-list/comments-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    TopicsComponent,
    TabComponentComponent,
    CommentsListComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
