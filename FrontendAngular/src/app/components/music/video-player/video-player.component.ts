import {Component, Input, OnInit} from '@angular/core';
import {SongService} from "../../../model/Services/song.service";

@Component({
  selector: 'app-video-player',
  templateUrl: 'video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  private apiLoaded = false;
  selectedID:string;
  @Input() videoId: string;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
