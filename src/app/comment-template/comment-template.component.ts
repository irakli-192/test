import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { item } from '../item.model';

@Component({
  selector: 'app-comment-template',
  templateUrl: './comment-template.component.html',
  styleUrls: ['./comment-template.component.scss']
})
export class CommentTemplateComponent {
  showInput:boolean=false
  @Input() comment:any;
  @Input() mainObj:any;
  @Input() commentsData:any[]=[];
  Reply(id:number){
    this.showInput=!this.showInput
    console.log(this.mainObj)
  }
  Minus(){
    if(this.comment.score>0){
      this.comment.score-=1
    }
  }
  Plus(){
    this.comment.score+=1
  }
  remove(id:number){
    console.log(this.commentsData);
    this.commentsData=this.commentsData.filter(item=>item.id!=id)
    
  }
}
