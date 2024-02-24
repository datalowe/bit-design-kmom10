import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsPageComponent } from './highlights-page.component';

describe('HighlightsPageComponent', () => {
  let component: HighlightsPageComponent;
  let fixture: ComponentFixture<HighlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
