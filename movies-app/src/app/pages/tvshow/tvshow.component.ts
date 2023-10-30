import { Component, OnInit } from '@angular/core';
import { TvCredits, TvPhotos, TvShow, TvVideos } from 'src/app/models/TvModel';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  tvShow: TvShow | null = null;
  tvVideos: TvShow[] = [];
  imagesSizes = IMAGES_SIZES;
  tvImages: TvPhotos | null = null;
  tvCredits: TvCredits | null = null;

  constructor(private route: ActivatedRoute, private tvShowService: TvshowsService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTv(id);
      this.getTvShowVideos(id);
      this.getTvImages(id);
      this.getTvCredits(id);
    });
  }

  getTv(id: string) {
    this.tvShowService.getTvShow(id).subscribe((tvShowData) => {
      this.tvShow = tvShowData;
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowService.getTvShowVideos(id).subscribe((tvVideosData) => {
      this.tvVideos = tvVideosData.results;
    });
  }

  getTvImages(id: string) {
    this.tvShowService.getTvShowImages(id).subscribe((tvImagesData) => {
      this.tvImages = tvImagesData;
    });
  }

  getTvCredits(id: string) {
    //cast uzvleri
    this.tvShowService.getTvShowCredits(id).subscribe((tvCreditsData) => {
      this.tvCredits = tvCreditsData;
    });
  }
}
