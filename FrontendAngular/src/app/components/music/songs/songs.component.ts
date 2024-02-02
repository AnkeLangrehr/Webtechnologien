import {Component, PipeTransform} from '@angular/core';
import {Song} from "../../../model/DTO/Song";
import {SongService} from "../../../model/Services/song.service";
import {PlaylistDialogComponent} from "../playlist-dialog/playlist-dialog.component";
import {DecimalPipe} from "@angular/common";
import {map, Observable, startWith} from "rxjs";
import {AlbumService} from "../../../model/Services/album-service";
import {Album} from "../../../model/DTO/Album";
import {PlaylistService} from "../../../model/Services/playlist.service";


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs: Song[] = [];
  selectedSong: Song;
  clicked:boolean=false;

  constructor(private songService: SongService, private playlistService:PlaylistService) {

  }

  ngOnInit() {
    this.songService.findAll().subscribe(data => {
      console.log(data);
      this.songs = data;
    });
  }

  onButtonClicked(song: Song) {
    this.selectedSong=song;
    this.playlistService.addSongToPlaylist(song)
    this.clicked!=this.clicked;


  }
}


