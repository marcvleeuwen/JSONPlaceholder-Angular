import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album, Photo, Post, User} from '../models/json-placeholder.model';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users/${userId}`);
  }

  public getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseURL}/posts?userId=${userId}`);
  }

  public getUserAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseURL}/albums?userId=${userId}`);
  }

  public getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseURL}/albums/${albumId}`);
  }
}


