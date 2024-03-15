import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenDocsPageComponent } from './hidden-docs-page.component';

describe('HiddenDocsPageComponent', () => {
  let component: HiddenDocsPageComponent;
  let fixture: ComponentFixture<HiddenDocsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenDocsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiddenDocsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
