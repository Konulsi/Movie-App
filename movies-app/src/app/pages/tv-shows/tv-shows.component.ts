import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { TvShow } from 'src/app/models/TvModel';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: TvShow[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(private tvShowService: TvshowsService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.searchChanged();
    // this.tvShowService.getTvShows().subscribe((res) => {
    //   this.tvShows = res;
    // });

    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowByGenre(genreId, 1);
      } else {
        this.getPagedTvs(1);
      }
    });
  }

  getTvShowByGenre(genreId: string, page: number) {
    this.tvShowService.getTvShowByGenre(genreId, page).subscribe((tvShowsData) => {
      this.tvShows = tvShowsData;
    });
  }

  getPagedTvs(page: number, searchKeyWord?: string) {
    this.tvShowService.getSearchTv(page, searchKeyWord).subscribe((tvShowData) => {
      this.tvShows = tvShowData;
    });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getTvShowByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvs(pageNumber, this.searchValue);
      } else {
        this.getPagedTvs(pageNumber);
      }
    }
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvs(1, this.searchValue);
    }
  }
}
