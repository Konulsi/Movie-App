import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSafeUrl(url: string) {
    //iframe taginde bir basha url gondere bilmirik deye  DomSanitizer den ist edirik.elimizdeki url-i method vbasitesile sanitizerin - in ichindeki bypassSecurityTrustResourceUrl() methoddan gotururuk
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
