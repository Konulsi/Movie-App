import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvitemsBannerComponent } from './tvitems-banner.component';

describe('TvitemsBannerComponent', () => {
  let component: TvitemsBannerComponent;
  let fixture: ComponentFixture<TvitemsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvitemsBannerComponent]
    });
    fixture = TestBed.createComponent(TvitemsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
