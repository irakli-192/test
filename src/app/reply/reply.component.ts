import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {
  replyId=0.1
  @Input() comment:any;
  @Input() commentData:object[]=[];
  @Input() name:string='';
  @Input() showInput:boolean=false;
  @Input() mainObj:any={};

  addReply(event:HTMLTextAreaElement){
    console.log(this.comment);
    
    this.comment.replies.push({
      content:event.value,
      createdAt:'1 second ago',
      id:this.replyId,
      replyingTo:this.name,
      score:0,
      user:{
        image:{
          png:'../../assets/images/avatars/image-juliusomo.png'
        },
        username:'juliusomo'
      }
    })
    this.replyId/=10
    event.value=''
    console.log(this.showInput)
  }
  
}
