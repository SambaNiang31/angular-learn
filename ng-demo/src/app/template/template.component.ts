import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

 /*
  users = ['Jack', 'Jim', 'John', 'Jane']

  constructor() { }

  getName(){
    return "Samba";
  }

  getContent(){
    return "No quote quote needed bro ";
  }
  condition(){
    return this.users.length>2;
  }

  getImpressiveStyle(){
    return "IMPRESSIVE";
  }

  clearUser(){
    this.users=[];
  }
*/
  noop(){

  }

  ngOnInit() {
  }

}
