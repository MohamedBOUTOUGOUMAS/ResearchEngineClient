import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsCarouselComponent } from './suggestions-carousel.component';

describe('SuggestionsCarouselComponent', () => {
  let component: SuggestionsCarouselComponent;
  let fixture: ComponentFixture<SuggestionsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
