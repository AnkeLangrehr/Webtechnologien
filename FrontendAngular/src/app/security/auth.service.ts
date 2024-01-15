import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/DTO/User";
import {SignUpRequest} from "../model/DTO/SignUpRequest";
import {catchError, Observable, Subject, tap} from "rxjs";
import {LoginRequest} from "../model/DTO/LoginRequest";

export interface AuthResponseData {
  kind: string;
  id: string;
  username: string;
  email: string;
  roles: string[];
  token: string;
  registered?: boolean;
}


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  loginUrl: string = 'api/auth/signup'

  constructor(private http: HttpClient) {
  }

  signup(request: SignUpRequest): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('api/auth/signup', request);
  }

  login(username: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('api/auth/signin', {
        username,
        password,
      },
      httpOptions
    ).pipe(tap(data => {
      const user = new User(data.email, data.username, data.roles, data.token, new Date());
      this.user.next(user);
    }));
  }
}
