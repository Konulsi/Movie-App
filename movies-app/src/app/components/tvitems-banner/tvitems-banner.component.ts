import { Component, Input } from '@angular/core';
import { TvShow } from 'src/app/models/TvModel';

@Component({
  selector: 'tvitems-banner',
  templateUrl: './tvitems-banner.component.html',
  styleUrls: ['./tvitems-banner.component.scss']
})
export class TvitemsBannerComponent {
  @Input() tvItems: TvShow[] = [];
  @Input() title: string = '';
}
