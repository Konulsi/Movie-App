import { Injectable } from '@angular/core';
import { TvCredits, TvDto, TvPhotos, TvVideos } from '../models/TvModel';
import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';
import { TvShow, TvshowsResults } from '../models/TvModel';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '171334430449b0432616d7e77c7f5bcf';
  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'changes', count: number = 12) {
    return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getTvShow(id: string) {
    return this.http.get<TvShow>(`${this.baseUrl}/${id}/tv?api_key=${this.apiKey}`);
  }

  getTvShowVideos(id: string) {
    return this.http.get<TvDto>(`${this.baseUrl}/trending/tv?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res);
      })
    );
  }

  getTvShowsGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getTvShowByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<TvDto>(`${this.baseUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getSearchTv(page: number, searchValue?: string) {
    const url = searchValue ? '/search/tv' : '/tv/changes';
    return this.http
      .get<TvshowsResults>(`${this.baseUrl}${url}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvShowImages(id: string) {
    return this.http.get<TvPhotos>(`${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`);
  }

  getTvShowCredits(id: string) {
    return this.http.get<TvCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }
}
