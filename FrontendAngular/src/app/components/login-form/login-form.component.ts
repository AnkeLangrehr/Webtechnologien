import {EventEmitter, Component, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SignUpRequest} from "../../model/DTO/SignUpRequest";
import {AuthResponseData, AuthService} from "../../security/auth.service";
import {LoginRequest} from "../../model/DTO/LoginRequest";
import {Observable} from "rxjs";
import {User} from "../../model/DTO/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})


export class LoginFormComponent {
  login: string = "";
  password: string = "";
  signUpRequest: SignUpRequest;
  loginRequest: LoginRequest;
  active: boolean = true;
  user: User;


  constructor(private authService: AuthService, private router: Router) {
    this.signUpRequest = new SignUpRequest();
    this.loginRequest = new LoginRequest();
  }

  onSwitchMode() {
    this.active = !this.active;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const username = form.value.email;

    let authObs: Observable<AuthResponseData>;

    if (!this.active) {
      this.signUpRequest.email = email;
      this.signUpRequest.username = username;
      this.signUpRequest.password = password;
      this.signUpRequest.role = [];
      this.signUpRequest.role.push("ROLE_USER")
      authObs = this.authService.signup(this.signUpRequest);
    } else {
      this.loginRequest.username = username;
      this.loginRequest.password = password;
      authObs = this.authService.login(username, password);
    }
    authObs.subscribe(data => {
      console.log("User logged in: " + data);
      this.router.navigate(['/main']);
    }, error => {
      console.log(error)
    })
    form.resetForm();
  }

}
