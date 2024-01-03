import {Component, OnInit} from '@angular/core';
import {Artist} from '../../../model/DTO/Artist';
import {ArtistService} from '../../../model/Services/artist-service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists: Artist[]=[];

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    this.artistService.findAll().subscribe(data => {
      console.log('Data', data)
      this.artists = data;
      //Implement RecordLabelService here
      for (var art of this.artists){
        art.recordLabel
      }
      console.log('Artists:', this.artists)
    })
  }
}
