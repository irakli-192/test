import { Component } from '@angular/core';
import myJson from '../../.vscode/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 mainObj=myJson
 commentsData=myJson.comments
}
