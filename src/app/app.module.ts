import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { LoginComponent } from './usermanagement/login/login.component';
import { BlogmanagementModule } from './blogmanagement/blogmanagement.module';

import { FeedmanagementModule } from './feedmanagement/feedmanagement.module';
import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { LoginChatService } from './login-chat.service';
import { BlogService } from './blog.service';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule  } from "ngx-ui-loader";
import { ChatModule } from './chatmanagement/chatmanagement.module';
import { SocketService } from './socket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),// ToastrModule added
    HttpClientModule,
    NgxUiLoaderModule ,
    NgxUiLoaderRouterModule,
    BlogmanagementModule,
    ChatModule,
    FeedmanagementModule,
    UsermanagementModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent, pathMatch: 'full' },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '**', component: LoginComponent },
        { path: '*', component: LoginComponent }
      ]
    )
  ],
  providers: [LoginChatService,BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
