import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private narrowWidth = 600;
  constructor(private router: Router) {}

  onPortraitHeaderPage() {
    const routeSansSlash = this.router.url.replace('/', '');
    return routeSansSlash === '' || (routeSansSlash === 'about' && window.innerWidth < this.narrowWidth);
  }

  getHeroImgUrl() {
    const narrowScreen = window.innerWidth < this.narrowWidth;
    if (this.onPortraitHeaderPage()) {
      if (narrowScreen) {
        return '/assets/hero_narrowscreen.jpg';
      }
      return '/assets/hero_widescreen.jpg';
    }
    return '/assets/code.jpg';
  }
}
