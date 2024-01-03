import {Component, OnInit} from '@angular/core';
import {Artist} from "../../../model/DTO/Artist";
import {ArtistService} from "../../../model/Services/artist-service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;
  artistId: string = "";

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.params['id'];
    this.artistService.findByID(this.artistId).subscribe(data => {
      //RecordLabelService here
        this.artist = data;
        console.log('Data', data);
      }
    );
  }
}
