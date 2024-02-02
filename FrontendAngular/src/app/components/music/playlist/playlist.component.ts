import { Component } from '@angular/core';
import {Playlist} from "../../../model/DTO/Playlist";
import {Song} from "../../../model/DTO/Song";
import {SongService} from "../../../model/Services/song.service";
import {AlbumService} from "../../../model/Services/album-service";
import {PlaylistService} from "../../../model/Services/playlist.service";
import {NgForm} from "@angular/forms";
import {User} from "../../../model/DTO/User";
import {UserService} from "../../../model/Services/user-service.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  playlist: Playlist[] = [];

  nPlaylist:Playlist;

  constructor(private playlistService:PlaylistService, private userService:UserService) {


  }

  ngOnInit() {
    this.playlistService.findAll().subscribe(data => {
      console.log(data);
      this.playlist = data;
    });
  }

  saveNewPlaylist(form: NgForm){
    this.nPlaylist = new Playlist();
    this.nPlaylist.name=form.value.name;
    this.nPlaylist.description=form.value.description;
    this.playlistService.addPlaylist(this.nPlaylist);
  }

}
