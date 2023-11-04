import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserFormComponent } from './User/user-form/user-form.component';
import {MainViewComponent} from './components/main/main-view/main-view.component';
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ArtistsListComponent} from "./components/music/artists-list/artists-list.component";
import {ArtistDetailComponent} from "./components/music/artist-detail/artist-detail.component";

const routes: Routes = [
  { path: '',   redirectTo: 'main', pathMatch: 'full' }, // redirect to `first-component`
  {path: 'main', component: MainViewComponent},
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'login', component: LoginFormComponent },
  {path: 'artists', component: ArtistsListComponent},
  {path: 'artist/:id', component: ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
