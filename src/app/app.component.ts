import { Component, OnInit } from '@angular/core';
import myJson from '../../.vscode/data.json'
import { mainObject } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mainObj:mainObject=myJson
  commentsData:object[]=myJson.comments
  getObj(){
    const localInfo=localStorage.getItem('object')
    if(localInfo){
      this.mainObj=JSON.parse(localInfo)
    }
    return this.mainObj
  }
  ngOnInit() {
    this.mainObj=this.getObj()
    console.log(this.mainObj);
    
  }
}
// if(JSON.parse(localStorage.getItem('object'))!=null)
// let a=new AppComponent()
// console.log(a.mainObj)
// console.log(a.commentsData)
