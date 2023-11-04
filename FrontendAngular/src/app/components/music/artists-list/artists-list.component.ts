import { Component } from '@angular/core';
import {Artist} from "../../../model/DTO/Artist";

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent {
  artists:Artist[] =[{id:'1', name:'Test123'},{id:'2', name:'Test1234'}]

}
