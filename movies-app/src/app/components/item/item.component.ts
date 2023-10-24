import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: Movie | null = null; //type ya movie ya null ola biler

  imagesSizes = IMAGES_SIZES;
}
