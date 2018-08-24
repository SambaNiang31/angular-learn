import {Component, Input, OnInit} from '@angular/core';
import {User} from "../users/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
 @Input() user:User;
  /*
@Input() name:string;
@Input()admin:boolean;
*/
  constructor() { }

  ngOnInit() {
  }

}
