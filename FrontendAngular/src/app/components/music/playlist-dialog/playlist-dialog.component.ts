import {Component, Input} from '@angular/core';
import {Song} from "../../../model/DTO/Song";
import {PlaylistService} from "../../../model/Services/playlist.service";
import {Playlist} from "../../../model/DTO/Playlist";
import {PlaylistComponent} from "../playlist/playlist.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.css']
})
export class PlaylistDialogComponent {

  @Input() selectedSong: Song;
  playlists:Playlist[];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.findAll().subscribe(data=>{
     this.playlists=data;
    })
  }

}
