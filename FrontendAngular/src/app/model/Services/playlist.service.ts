import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {Song} from "../DTO/Song";
import {HttpClient} from "@angular/common/http";
import {PlaylistComponent} from "../../components/music/playlist/playlist.component";
import {Playlist} from "../DTO/Playlist";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private playlistAll: string;
  private playlistByIdUrl: string='api/playlist/';

  constructor(private http: HttpClient) {
    this.playlistAll = 'api/playlist/all';
  }

  public findAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistAll);
  }

  public findByID(id: string): Observable<Playlist>{
    return this.http.get<Playlist>(this.playlistByIdUrl+id);

  }
}
