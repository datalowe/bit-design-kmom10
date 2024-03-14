import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { IMAGE_BASE_URL, MEDIUM_SCREEN_MIN_WIDTH_PX, WIDE_SCREEN_MIN_WIDTH_PX } from '../../shared_utils/constants';
import { NgOptimizedImage } from '@angular/common';

const heroImgs = {
  portraitNarrow: {
    fName: 'hero_narrowscreen',
    altText: 'A picture of Bew Gorp smiling',
  },
  portraitWide: {
    fName: 'hero_widescreen',
    altText: 'A picture of Bew Gorp standing smiling by a whiteboard',
  },
  code: {
    fName: 'hero_code',
    altText: 'A picture of HTML code on a screen',
  },
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private narrowWidth = 600;
  public heroImg = heroImgs['portraitWide'];

  imageBaseUrl = IMAGE_BASE_URL;
  mediumScreenMinWidthPx = MEDIUM_SCREEN_MIN_WIDTH_PX;
  wideScreenMinWidthPx = WIDE_SCREEN_MIN_WIDTH_PX;

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
    if (this.onPortraitHeaderPage()) {
      if (window.innerWidth < MEDIUM_SCREEN_MIN_WIDTH_PX) {
        this.heroImg = heroImgs['portraitNarrow'];
        return;
      }
      this.heroImg = heroImgs['portraitWide'];
      return;
    }
    this.heroImg = heroImgs['code'];
  }

  getHeroImgUrl() {
    let reqWidth;
    if (window.innerWidth < MEDIUM_SCREEN_MIN_WIDTH_PX) {
      reqWidth = MEDIUM_SCREEN_MIN_WIDTH_PX;
    } else if (window.innerWidth < WIDE_SCREEN_MIN_WIDTH_PX) {
      reqWidth = WIDE_SCREEN_MIN_WIDTH_PX;
    } else {
      reqWidth = WIDE_SCREEN_MIN_WIDTH_PX * 2;
    }
    return `${IMAGE_BASE_URL}?filebase=${this.heroImg.fName}&width=${reqWidth}&quality=80`;
  }

  ngOnInit(): void {
    this.setHeroImg();
  }
}
