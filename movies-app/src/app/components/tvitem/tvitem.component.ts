import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TvShow } from 'src/app/models/TvModel';

@Component({
  selector: 'tvitem',
  templateUrl: './tvitem.component.html',
  styleUrls: ['./tvitem.component.scss']
})
export class TvitemComponent implements OnInit {
  @Input() tvItemData: TvShow | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor() {}
  ngOnInit(): void {}
}
