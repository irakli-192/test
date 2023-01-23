import { Component, EventEmitter, Input, Output } from '@angular/core';
import { item, mainObject } from '../item.model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {
  // replyId=0.1
  @Input() comment:item;
  @Input() commentData:object[];
  @Input() name:string='';
  @Input() showInput:boolean;
  @Input() mainObj:mainObject;
  @Output() show:EventEmitter<boolean>=new EventEmitter()

  addReply(event:HTMLTextAreaElement){
    console.log(this.comment);
    
    this.comment.replies.push({
      content:event.value,
      createdAt:'1 second ago',
      id:Math.random(),
      replyingTo:this.name,
      score:0,
      user:{
        image:{
          png:'../../assets/images/avatars/image-juliusomo.png'
        },
        username:'juliusomo'
      }
    })
    // this.replyId/=10
    this.showInput=!this.showInput
    this.show.emit(this.showInput)
    event.value=''
    console.log(this.mainObj,37)
    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
 
}
