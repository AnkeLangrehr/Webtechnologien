import {Component, OnInit} from '@angular/core';
import {Artist} from '../../../model/DTO/Artist';
import {ArtistService} from '../../../model/Services/artist-service';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists: Artist[]=[];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../../../../assets/music/pexels-jessica-lewis-thepaintedsquare-1010519.jpg','../../../../assets/music/pexels-stephen-niemeier-63703.jpg'];

  constructor(private artistService: ArtistService,config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
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
