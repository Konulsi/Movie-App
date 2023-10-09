import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', {
      params: { api_key: '171334430449b0432616d7e77c7f5bcf' }
    });
  }
}
