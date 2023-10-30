import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvitemComponent } from './tvitem.component';

describe('TvitemComponent', () => {
  let component: TvitemComponent;
  let fixture: ComponentFixture<TvitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvitemComponent]
    });
    fixture = TestBed.createComponent(TvitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
