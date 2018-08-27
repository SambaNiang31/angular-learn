import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type Comment={
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentsListService {
  comments = [];

  constructor(public http: HttpClient) {  }

  fetchComments(){
    this.http.get<any []>('http://localhost:8000/api/comments')
      .subscribe((r: any[]) => {
        this.comments = r
        console.log(this.comments);
      })
  }

}
