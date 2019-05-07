import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { LoginChatService } from '../login-chat.service';

@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [
        {path:'signup',component:SignUpComponent}
      ]
    )
  ],
  providers:[LoginChatService]
})
export class UsermanagementModule { }
