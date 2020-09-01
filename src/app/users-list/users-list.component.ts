import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList = [];
  tempValue = 0;
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }

search(query:string) {
  this.usersList = this.usersService.findData(query);
}

sort(direction: string) {
  console.log(direction);
  
  this.usersList = this.usersService.sortUsers(direction);
}
}
