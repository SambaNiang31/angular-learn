import { Component, OnInit } from '@angular/core';
import {TabComponentService} from "./tab-component.service";

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {

  constructor(public service:TabComponentService) { }

  showUsers(){
    this.service.active='users';
    console.log( this.service.active);
  }
  showTopics(){
  this.service.active='topics';
  console.log(this.service.active);
  }

  ngOnInit() {
  }

}
