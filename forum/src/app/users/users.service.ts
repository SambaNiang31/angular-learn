import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export type User = {
  name: string,
  admin: boolean,
  id: number,
  email:string,
  statement:string,
}

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  users: User []= [];


  constructor(public http: HttpClient) { }

  fetchUsers(){
    this.http.get<any []>('http://localhost:8000/api/users')
      .subscribe((r:any[])=> {
      this.users = r.map(user=> mapAnyUser(user));
      console.log(this.users);
    })
  }
}
function mapAnyUser(user: any): User{
  return {
    name: user.name,
    admin: user.admin,
    id: user.id,
    email:user.email,
    statement:user.statement
  }
}





