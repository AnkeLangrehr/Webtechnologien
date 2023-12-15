import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../DTO/User'
import {Observable} from 'rxjs';
import {Album} from "../DTO/Album";

@Injectable()
export class AlbumService {

  private albumUrl: string='api/album/all';
  private albumAdd:string='/api/album/add'
  private albumFindByID:string='api/album/'

  constructor(private http: HttpClient) {
    this.albumUrl = 'api/album/all';
  }

  public findAll(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl);
  }

  public save(album: Album) {
    return this.http.post<Album>(this.albumAdd, album);
  }

  public findByID(id:string){
    return this.http.get<Album>(this.albumFindByID+id);
  }
}
