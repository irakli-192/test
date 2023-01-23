import { Component, EventEmitter, Input,Output } from '@angular/core';
import { mainObject } from '../item.model';

@Component({
  selector: 'app-reply-template',
  templateUrl: './reply-template.component.html',
  styleUrls: ['./reply-template.component.scss']
})
// if(localStorage.getItem!=null){
//   let obj=localStorage.getItem()
// }
export class ReplyTemplateComponent {
  show:boolean=true;
  errorModel:boolean=false;
  editInput:boolean=true
  @Input() templOptions:any={}
  @Input() index:number;
  @Input() replies:any[];
  // @Input() comments:any;
  @Input() mainObj:mainObject;
  content:string=''
  
  error(){
    this.errorModel=true
    
  }
  remove(){
    
    this.replies.splice(this.index,1)
    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
  close(){
    this.errorModel=false
  }
  edit(){
    this.editInput=!this.editInput
    this.content='@'+this.replies[this.index].replyingTo+' '+this.replies[this.index].content
    
  }
  Minus(id:number){

    if(this.replies[this.index].score>0){
      this.replies[this.index].score-=1
    }
    console.log(this.mainObj)
    
    localStorage.setItem('object',JSON.stringify(this.mainObj))
    
  }
  
  send(){
    console.log(this.content);
    this.replies[this.index].content=this.content.replace('@'+this.replies[this.index].replyingTo+" ",'')
    console.log(this.replies[this.index])
    this.editInput=true
    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
  Plus(id:number){
    this.replies[this.index].score+=1
    localStorage.setItem('object',JSON.stringify(this.mainObj))
    console.log(this.mainObj)
  }
}
