import { Component } from '@angular/core';
import { TechCarouselComponent } from '../tech-carousel/tech-carousel.component';
import { RouterModule } from '@angular/router';
import { IMAGE_BASE_URL } from '../../shared_utils/constants';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [TechCarouselComponent, RouterModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent {
  imageBaseUrl = IMAGE_BASE_URL;
}
