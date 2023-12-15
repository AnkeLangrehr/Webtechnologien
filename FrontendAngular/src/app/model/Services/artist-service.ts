import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../DTO/User'
import {Observable} from 'rxjs';

@Injectable()
export class ArtistService {

  private usersUrl: string='api/artist/all';
  private userAdd:string='/api/demo/add'

  constructor(private http: HttpClient) {
    this.usersUrl = 'api/demo/all';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    console.log(user.name, user.email);
    return this.http.post<User>(this.userAdd, user);
  }
}
