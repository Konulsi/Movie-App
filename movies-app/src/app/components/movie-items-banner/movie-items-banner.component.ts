import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'items-banner',
  templateUrl: './movie-items-banner.component.html',
  styleUrls: ['./movie-items-banner.component.scss']
})
export class MovieItemsBannerComponent {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
}
