import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: 'video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  private apiLoaded = false;
  selectedID:string;
  @Input() videoId: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedID="dQw4w9WgXcQ";
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
