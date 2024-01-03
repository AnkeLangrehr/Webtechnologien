import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../DTO/User'
import {Observable} from 'rxjs';
import {Artist} from "../DTO/Artist";

@Injectable()
export class ArtistService {

  private artistAllUrl: string='api/artist/all';
  private artistAdd:string='/api/artist/add';
  private artistFindByIDUrl: string ='/api/artist/'

  constructor(private http: HttpClient) {
    this.artistFindByIDUrl='/api/artist/';
    this.artistAdd='/api/artist/add';
    this.artistAllUrl ='/api/artist/all';
  }

  public findAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistAllUrl);
  }

  public save(artist: Artist) {
    console.log(artist.name, artist.recordLabel);
    return this.http.post<Artist>(this.artistAdd, artist);
  }

  public findByID(id: string){
    return this.http.get<Artist>(this.artistFindByIDUrl+id);

  }
}
