import { Component } from '@angular/core';
import {TabComponentService} from "./tab-component/tab-component.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(public service: TabComponentService) {
  }

  title = 'forum';
}
