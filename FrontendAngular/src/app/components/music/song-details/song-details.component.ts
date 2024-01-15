import {Component} from '@angular/core';
import {SongService} from "../../../model/Services/song.service";
import {ActivatedRoute} from "@angular/router";
import {Song} from "../../../model/DTO/Song";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent {
  songId: string;
  song: Song;

  constructor(private songService: SongService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.songId = this.route.snapshot.params['id'];
    this.songService.findByID(this.songId).subscribe(data => {
        //RecordLabelService here
        this.song = data;
        console.log('Data', data);
      }
    );
  }
}
