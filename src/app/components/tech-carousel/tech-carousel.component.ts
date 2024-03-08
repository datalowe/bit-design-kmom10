import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-carousel',
  standalone: true,
  imports: [],
  templateUrl: './tech-carousel.component.html',
  styleUrl: './tech-carousel.component.scss',
})
export class TechCarouselComponent implements OnInit {
  private WAIT_FADEOUT_MS = 1000;
  private FADEIN_DUR_MS = 1000;
  private FADEOUT_DUR_MS = 1000;
  private WAIT_NEXTIMG_MS = 300;
  private techImgFnames = [
    'angular.png',
    'ansible.png',
    'django.png',
    'docker.png',
    'python.png',
    'rust.png',
    'webassembly.png',
  ];
  private techImgCounter = 0;
  techImgOpacity = 0;
  techImgUrl = '/assets/tech-logos/angular.png';

  ngOnInit(): void {
    this.updateTechImgUrl();
  }

  updateTechImgUrl = () => {
    const fname = this.techImgFnames[this.techImgCounter];
    this.techImgUrl = `/assets/tech-logos/${fname}`;
    setTimeout(this.fadeInTechImg, this.WAIT_NEXTIMG_MS);
    this.techImgCounter = (this.techImgCounter + 1) % this.techImgFnames.length;
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
