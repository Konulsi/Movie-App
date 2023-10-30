import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { MoviesService } from 'src/app/services/movies.service';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[];

  constructor(private movieService: MoviesService, private tvShowsService: TvshowsService) {}

  ngOnInit(): void {
    this.movieService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
    this.tvShowsService.getTvShowsGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}
