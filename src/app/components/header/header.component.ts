import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

const heroImgs = {
  portraitNarrow: {
    url: '/assets/hero_narrowscreen.jpg',
    altText: 'A picture of Bew Gorp smiling',
  },
  portraitWide: {
    url: '/assets/hero_widescreen.jpg',
    altText: 'A picture of Bew Gorp standing smiling by a whiteboard',
  },
  code: {
    url: '/assets/code.jpg',
    altText: 'A picture of HTML code on a screen',
  },
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private narrowWidth = 600;
  public heroImg = heroImgs['portraitWide'];
  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.setHeroImg();
      }
    });
  }

  onPortraitHeaderPage() {
    const routeSansSlash = this.router.url.replace('/', '');
    return routeSansSlash === '' || (routeSansSlash === 'about' && window.innerWidth < this.narrowWidth);
  }

  setHeroImg() {
    const narrowScreen = window.innerWidth < this.narrowWidth;
    if (this.onPortraitHeaderPage()) {
      if (narrowScreen) {
        this.heroImg = heroImgs['portraitNarrow'];
        return;
      }
      this.heroImg = heroImgs['portraitWide'];
      return;
    }
    this.heroImg = heroImgs['code'];
  }

  ngOnInit(): void {
    this.setHeroImg();
  }
}
