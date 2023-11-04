import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserFormComponent } from './User/user-form/user-form.component';

import { UserService } from './model/Services/user-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainViewComponent } from './components/main/main-view/main-view.component';
import {NgbCarousel, NgbNav, NgbNavItem, NgbNavOutlet, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ArtistsListComponent } from './components/music/artists-list/artists-list.component';
import { ArtistDetailComponent } from './components/music/artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    NavbarComponent,
    MainViewComponent,
    LoginFormComponent,
    ArtistsListComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbCarousel,
    NgbSlide,
    NgbNavOutlet,
    NgbNavItem,
    NgbNav
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
