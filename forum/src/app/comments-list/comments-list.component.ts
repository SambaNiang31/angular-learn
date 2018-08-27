import { Component, OnInit } from '@angular/core';
import {CommentsListService} from "./comments-list.service";


@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor(public service: CommentsListService) {
  }

  fetchComments(){
   this.service.fetchComments();

  }


  ngOnInit() {
  }

}
