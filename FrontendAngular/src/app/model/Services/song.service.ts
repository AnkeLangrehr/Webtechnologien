import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Song} from "../DTO/Song";
import {HttpClient} from "@angular/common/http";
import {Artist} from "../DTO/Artist";

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private songAllUrl: string;
  private songByIdUrl: string='api/song/';

  constructor(private http: HttpClient) {
    this.songAllUrl = 'api/song/all';
  }

  public findAll(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songAllUrl);
  }

  public findByID(id: string): Observable<Song>{
    return this.http.get<Song>(this.songByIdUrl+id);

  }
}
