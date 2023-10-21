import { Component, Input } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // user: IUser = {
  //   id: 1001,
  //   name: "Bob",
  //   birthdate: new Date(),
  //   email: 'santa@ukr.net',
  //   isAdmin: false
  // };

  @Input()
  user: IUser = {
    id: 0,
    name: "",
    birthdate: new Date(),
    email: '',
    isAdmin: false
  }
}
