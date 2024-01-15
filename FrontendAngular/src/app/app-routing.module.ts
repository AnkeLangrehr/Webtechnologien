import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './User/user-list/user-list.component';
import {MainViewComponent} from './components/main/main-view/main-view.component';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ArtistsListComponent} from "./components/music/artists-list/artists-list.component";
import {ArtistDetailComponent} from "./components/music/artist-detail/artist-detail.component";
import {SongsComponent} from "./components/music/songs/songs.component";
import {SongDetailsComponent} from "./components/music/song-details/song-details.component";

const routes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' }, // redirect to `first-component`
  {path: 'main', component: MainViewComponent},
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginFormComponent },
  {path: 'artists', component: ArtistsListComponent},
  {path: 'artist/:id', component: ArtistDetailComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'songs/:id', component: SongDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
