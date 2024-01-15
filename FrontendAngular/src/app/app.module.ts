import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './User/user-list/user-list.component';

import { UserService } from './model/Services/user-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainViewComponent } from './components/main/main-view/main-view.component';
import {NgbCarousel, NgbNav, NgbNavItem, NgbNavOutlet, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ArtistsListComponent } from './components/music/artists-list/artists-list.component';
import { ArtistDetailComponent } from './components/music/artist-detail/artist-detail.component';
import {ArtistService} from "./model/Services/artist-service";
import {AlbumService} from "./model/Services/album-service";
import { SongsComponent } from './components/music/songs/songs.component';
import { SongDetailsComponent } from './components/music/song-details/song-details.component';
import { VideoPlayerComponent } from './components/music/video-player/video-player.component';
import {YouTubePlayerModule} from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    MainViewComponent,
    LoginFormComponent,
    ArtistsListComponent,
    ArtistDetailComponent,
    SongsComponent,
    SongDetailsComponent,
    VideoPlayerComponent,
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
    NgbNav,
    YouTubePlayerModule
  ],
  providers: [UserService, ArtistService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
