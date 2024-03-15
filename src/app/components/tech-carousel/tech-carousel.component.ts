import { Component, OnInit } from '@angular/core';
import { IMAGE_BASE_URL, MEDIUM_SCREEN_MIN_WIDTH_PX, WIDE_SCREEN_MIN_WIDTH_PX } from '../../shared_utils/constants';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tech-carousel',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './tech-carousel.component.html',
  styleUrl: './tech-carousel.component.scss',
})
export class TechCarouselComponent implements OnInit {
  private WAIT_FADEOUT_MS = 1000;
  private FADEIN_DUR_MS = 1000;
  private FADEOUT_DUR_MS = 1000;
  private WAIT_NEXTIMG_MS = 300;
  private techLogoData = [
    {
      name: 'angular',
      width: '2440',
      height: '2550',
    },
    {
      name: 'ansible',
      width: '256',
      height: '256',
    },
    {
      name: 'django',
      width: '300',
      height: '300',
    },
    {
      name: 'docker',
      width: '3840',
      height: '2160',
    },
    {
      name: 'python',
      width: '1280',
      height: '1275',
    },
    {
      name: 'rust',
      width: '3119',
      height: '2237',
    },
    {
      name: 'webassembly',
      width: '300',
      height: '300',
    },
  ];
  techLogo = this.techLogoData[0];
  private techImgCounter = 0;
  mediumScreenWidthPx = MEDIUM_SCREEN_MIN_WIDTH_PX;
  techImgOpacity = 0;
  techImgUrl = '/assets/tech-logos/angular.png';
  techImgAltText = 'Angular';

  ngOnInit(): void {
    this.updateTechImgUrl();
  }

  updateTechImgUrl = () => {
    this.techLogo = this.techLogoData[this.techImgCounter];
    let reqWidth;
    if (window.innerWidth < MEDIUM_SCREEN_MIN_WIDTH_PX) {
      reqWidth = 200;
    } else if (window.innerWidth < WIDE_SCREEN_MIN_WIDTH_PX) {
      reqWidth = 300;
    } else {
      reqWidth = 400;
    }
    this.techImgUrl = `${IMAGE_BASE_URL}?filebase=${this.techLogo.name}&width=${reqWidth}&quality=80`;
    setTimeout(this.fadeInTechImg, this.WAIT_NEXTIMG_MS);
    this.techImgCounter = (this.techImgCounter + 1) % this.techLogoData.length;
  };

  fadeInTechImg = () => {
    if (this.techImgOpacity >= 1) {
      setTimeout(this.fadeOutTechImg, this.WAIT_FADEOUT_MS);
    } else {
      this.techImgOpacity += 0.01;
      setTimeout(this.fadeInTechImg, this.FADEIN_DUR_MS / 100);
    }
  };

  fadeOutTechImg = () => {
    if (this.techImgOpacity <= 0) {
      setTimeout(this.updateTechImgUrl, this.WAIT_NEXTIMG_MS);
    } else {
      this.techImgOpacity -= 0.01;
      setTimeout(this.fadeOutTechImg, this.FADEOUT_DUR_MS / 100);
    }
  };
}
