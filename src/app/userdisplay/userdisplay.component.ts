import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit{

  userDisplaySelected: User;

  constructor(private userService: UserService){}
  ngOnInit(){
    this.userService.selectedUser.subscribe((user)=>{
      this.userDisplaySelected = user;
    })
  }
}
