import { switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  subsc: Subscription;
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // forkJoin([
    //   this.moviesService.getMovies('popular'),
    //   this.moviesService.getMovies('top_rated'),
    //   this.moviesService.getMovies('upcoming')
    // ]).subscribe(([a,b,c]) => {
    //   this.popularMovies = a;
    //   this.topRatedMovies = b;
    //   this.upcomingMovies = c;
    // });
    this.subsc = this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }

  ngOnDestroy(): void {
    //bir componentden bashqa componente kechdikde observable olan method unoberservable olur. yaddash yuklenmesin deye
    this.subsc.unsubscribe();
  }
}
