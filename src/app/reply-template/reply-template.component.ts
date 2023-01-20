import { Component, Input } from '@angular/core';

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
  @Input() templOptions:any={}
  @Input() index:any;
  @Input() replies:any[]=[]
  @Input() comments:any;
  @Input() mainObj:any={};
  
  remove(id:number){
    console.log(this.index,this.replies)
    if(this.index==0){
      this.replies.shift()
    }else{
      this.replies.splice(this.index,this.index)
    }
  }
  Minus(){
    if(this.replies[this.index].score>0){
      this.replies[this.index].score-=1
    }
    localStorage.setItem('object',JSON.stringify(this.mainObj))
    console.log(this.mainObj);
    
  }
  Plus(){
    this.replies[this.index].score+=1
    localStorage.setItem('object',JSON.stringify(this.mainObj))
  }
  
}
