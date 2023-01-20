import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() commentsData:object[]=[];
  @Input() mainObj:any;
}
