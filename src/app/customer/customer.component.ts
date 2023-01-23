import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  @Input() commentsData:object[];
  @Input() mainObj:any;
  id=100
  addComment(event:HTMLTextAreaElement){
    this.mainObj.comments.push({
      id:this.id,
      content:event.value,
      createdAt:'1 second ago',
      score:0,
      user:{
        image:{
          png:'../../assets/images/avatars/image-juliusomo.png'    
        },
        username:'juliusomo'
      },
      replies:[]
    })
    this.id+=1
    event.value=''
    console.log(this.mainObj);
    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
  
}
