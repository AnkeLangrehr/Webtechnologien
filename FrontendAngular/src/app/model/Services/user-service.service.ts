import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../DTO/User'
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string='api/user/all';
  private userAdd:string='/api/user/add'

  constructor(private http: HttpClient) {
    this.usersUrl = 'api/user/all';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    console.log(user.username, user.email);
    return this.http.post<User>(this.userAdd, user);
  }
}
