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
  // @Input() templOptions:any={}
  @Input() index:number;
  @Input() replies:any[];
  // @Input() comments:any;
  @Input() mainObj:mainObject;
  
  error(){
    this.errorModel=true
    
  }
  remove(){
    if(this.index==0){
        this.replies.shift()
      }else{
      this.replies.splice(this.index,this.index)
    }
  
    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
  close(){
    this.errorModel=false
  }
  edit(){
    this.editInput=!this.editInput
  }
  Minus(id:number){
    if(this.replies[this.index].score>0){
      this.replies[this.index].score-=1
    }
    console.log(this.mainObj)

    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
  send(){
    this.editInput=true
  }
  Plus(id:number){
    this.replies[this.index].score+=1
    localStorage.setItem('object',JSON.stringify(this.mainObj))
    console.log(this.mainObj)
  }
}
