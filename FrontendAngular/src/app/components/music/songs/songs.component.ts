import {Component, PipeTransform} from '@angular/core';
import {Song} from "../../../model/DTO/Song";
import {SongService} from "../../../model/Services/song.service";
import {DecimalPipe} from "@angular/common";
import {map, Observable, startWith} from "rxjs";
import {AlbumService} from "../../../model/Services/album-service";
import {Album} from "../../../model/DTO/Album";


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs: Song[] = [];

  constructor(private songService: SongService, private albumService:AlbumService) {

  }

  ngOnInit() {
    this.songService.findAll().subscribe(data => {
      console.log(data);
      this.songs = data;
    });
  }

}


