import {Component, Input, OnInit} from '@angular/core';
import {Topic, TopicsService} from "./topics.service";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {


  constructor(public  service: TopicsService) {
    service.fetchTopics();
  }



  ngOnInit() {
  }

}
