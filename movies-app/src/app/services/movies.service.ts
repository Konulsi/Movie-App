import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto, MovieVideoDto, TvDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '171334430449b0432616d7e77c7f5bcf';

  constructor(private http: HttpClient) {}
  getMovies(type: string = 'upcoming', count: number = 12) {
    // of(1, 2)
    //   .pipe(
    //     map((res) => {
    //       return res.toString();
    //     }),
    //     tap((res) => {
    //       console.log(res);
    //     })
    //   )
    //   .subscribe((res) => {});
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  searchMovies(page: number) {
    return this.http.get<TvDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getTvs(type: string = 'latest', count: number = 12) {
    return this.http.get<TvDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }
}
