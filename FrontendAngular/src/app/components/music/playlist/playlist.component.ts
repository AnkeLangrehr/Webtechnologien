import { Component } from '@angular/core';
import {Playlist} from "../../../model/DTO/Playlist";
import {Song} from "../../../model/DTO/Song";
import {SongService} from "../../../model/Services/song.service";
import {AlbumService} from "../../../model/Services/album-service";
import {PlaylistService} from "../../../model/Services/playlist.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  playlist: Playlist[] = [];

  constructor(private playlistService:PlaylistService) {

  }

  ngOnInit() {
    this.playlistService.findAll().subscribe(data => {
      console.log(data);
      this.playlist = data;
    });
  }

}
