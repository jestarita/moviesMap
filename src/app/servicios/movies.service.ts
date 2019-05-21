import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  selectedViewMovie:any;
  constructor(private http:HttpClient) { }

  url = 'https://api.themoviedb.org';
  apy_key= "62fdeaede80b5fa694e2f71173a022fa"

  public listMovies(){
    return this.http.get(`${this.url}/4/list/1?page=1&api_key=${this.apy_key}`)
  }

  public listGeneros(){
    return this.http.get(`${this.url}/3/genre/movie/list?api_key=${this.apy_key}`)
  }
}
