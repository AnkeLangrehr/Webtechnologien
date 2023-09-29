import {Component, OnInit} from '@angular/core';
import {User} from '../../model/DTO/User';
import {UserService} from '../../model/Services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[]=[];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      console.log('Data:', data)
      this.users = data;
      console.log('users:', this.users)
    });
  }
}
