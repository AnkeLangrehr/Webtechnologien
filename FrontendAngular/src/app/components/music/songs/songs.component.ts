import {Component, PipeTransform} from '@angular/core';
import {Song} from "../../../model/DTO/Song";
import {SongService} from "../../../model/Services/song.service";
import {DecimalPipe} from "@angular/common";
import {map, startWith} from "rxjs";


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs: Song[] = [];


  constructor(private songService: SongService) {

  }

  ngOnInit() {
    this.songService.findAll().subscribe(data => {
      //Album Service Mapping
      console.log(data);
      this.songs = data;
    });
  }
}
