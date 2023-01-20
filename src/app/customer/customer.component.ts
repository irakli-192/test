import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  @Input() commentsData:object[]=[];
  id=100
  addComment(event:HTMLTextAreaElement){
    this.commentsData.push({
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
  }
}
