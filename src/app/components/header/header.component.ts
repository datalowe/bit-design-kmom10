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
  constructor(private router: Router) {}

  onFirstPage() {
    return this.router.url.replace('/', '') === '';
  }

  getHeroImgUrl() {
    const narrowScreen = window.innerWidth < 600;
    if (this.onFirstPage()) {
      if (narrowScreen) {
        return '/assets/hero_narrowscreen.jpg';
      }
      return '/assets/hero_widescreen.jpg';
    }
    return '/assets/code.jpg';
  }
}
