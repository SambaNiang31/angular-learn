import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export  type Topic={
  title:string,
  content: string,

}

@Injectable({
  providedIn: 'root'
})

export class TopicsService {
  topics = [];


  constructor(public http: HttpClient) {}
  fetchTopics() {
    this.http.get<any []>('http://localhost:8000/api/topics')
      .subscribe((r: any[]) => {
        this.topics = r
        console.log(this.topics);
      })
  }

}
