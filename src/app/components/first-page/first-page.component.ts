import { Component } from '@angular/core';
import { TechCarouselComponent } from '../tech-carousel/tech-carousel.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [TechCarouselComponent, RouterModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent {}
