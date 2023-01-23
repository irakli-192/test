import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentTemplateComponent } from './comment-template/comment-template.component';
import { ReplyComponent } from './reply/reply.component';
import { ReplyTemplateComponent } from './reply-template/reply-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CommentsComponent,
    CommentTemplateComponent,
    ReplyComponent,
    ReplyTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
