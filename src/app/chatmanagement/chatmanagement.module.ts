import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char-pipe';
import { ChatBoxComponent } from './chat/chat.component';
import { SocketService } from '../socket.service';
import { LoginChatService } from '../login-chat.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    
    RouterModule.forChild([ 
      { path: 'chat', component:ChatBoxComponent}
    ]),
    SharedModule
  ],
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
})
export class ChatModule { }