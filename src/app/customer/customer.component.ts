import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { mainObject } from '../item.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  @Input() commentsData:object[];
  @Input() mainObj:mainObject;
  addComment(event:HTMLTextAreaElement){
    this.mainObj.comments.push({
      id:Math.random(),
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
    event.value=''
    console.log(this.mainObj);
    localStorage.setItem('object',JSON.stringify(this.mainObj))

  }
  
}
