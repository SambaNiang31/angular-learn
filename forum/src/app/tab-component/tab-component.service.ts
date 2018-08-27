import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../users/users.service";
import {TopicsService} from "../topics/topics.service";

@Injectable({
  providedIn: 'root'
})
export class TabComponentService {

  active = 'users'

}

