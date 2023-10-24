import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto, TvDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { tap } from 'rxjs';
import { GenresDto } from '../models/genre';

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

  //concatMAp-  veri akışında aktif subscription işlemi bitmeden bir sonrakini başlatmaz ve veri akışını, veri kaynağındaki sıraya göre sağlar. (datalar ardicil sinxron oturulur)
  //mergeMap, concatMap’in aksine veri kaynağındaki sıraya bakmaksızın ve bir önceki veri işleminin bitmesine dikkat etmeksizin hızlı bir şekilde tüm subscription’ları arka arkaya basar. (datalar nece geldi evveli datanin axishini gozlemeden novbetini oturur)
  //switchMap- mergeMap ve concatMap’den ayıran özellik; bir veri switchMap ile yayıldığında bir önceki yayılma (emission) iptal edilir ve yeni sonuca abone (subscribed) olunur. (switchMap ise evvelki data axishi legv edilib, yeni olan neticeye abone olur)
  //of operatoru js-deki map kimi yeni array yaradir. lakin, elimizde array olmasa bele istenilen tipden olan datani bir array kimi bir araya yigib observable ede bilir.
  //pipe- Bu metot ile birden fazla operatör virgüller ile ayrılarak kullanılabilir. Yani bir değer birçok sefer arka arkaya işlenebilir.
  //
  //
  getMoviesGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  //with_genres=${genreId} - bu parametrdir. ? isharesinden sonra yazilmalidir. 2ci parametr olacaqsa &(ampersent)-bu ishare yazilirnsonra novbeti parametr yazilir.
  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  searchMovies(page: number, searchValue?: string) {
    const url = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(`${this.baseUrl}${url}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvs(type: string = 'latest', count: number = 12) {
    //pipe hansisa datalari filterleye bilmek uchun veya mueyyen cherte uygun getire bilmek ist edilir
    return this.http.get<TvDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }
}

//12ci qaldi
