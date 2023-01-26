import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { item, mainObject } from '../item.model';

@Component({
  selector: 'app-comment-template',
  templateUrl: './comment-template.component.html',
  styleUrls: ['./comment-template.component.scss'],
})
export class CommentTemplateComponent {
  editInput = false;
  showInput: boolean = false;
  content: string = '';
  @Input() comment: any;
  @Input() mainObj: mainObject;
  @Input() commentsData: object[];
  commentErrorModel: boolean = false;
  Reply(id: number) {
    this.showInput = !this.showInput;
    console.log(this.mainObj);
  }
  show($event: boolean) {
    this.showInput = !this.showInput;
  }
  send() {
    console.log(this.comment);
    this.comment.content = this.content;
    localStorage.setItem('object', JSON.stringify(this.mainObj));
    this.editInput = false;
  }
  Minus() {
    if (this.comment.score > 0) {
      this.comment.score -= 1;
      localStorage.setItem('object', JSON.stringify(this.mainObj));
    }
  }
  Plus() {
    this.comment.score += 1;
    localStorage.setItem('object', JSON.stringify(this.mainObj));
  }
  edit() {
    this.editInput = true;
    this.content = this.comment.content;
  }
  error() {
    this.commentErrorModel = true;
  }
  remove(id: number) {
    this.mainObj.comments = this.mainObj.comments.filter(
      (item: any) => item.id != id
    );
    localStorage.setItem('object', JSON.stringify(this.mainObj));
    this.commentErrorModel = false;
  }
  close() {
    this.commentErrorModel = false;
  }
}
