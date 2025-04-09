import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]=[
    new User(100,"Amal","Male","Active"),
    new User(101,"Ashwin","Male","Inactive"),
    new User(103,"Ashi","Female","Inactive"),
    new User(104,"Deepika","Female","Active")
  ];

  selectedUser:EventEmitter<User> = new EventEmitter<User>();

  constructor() { }


}
