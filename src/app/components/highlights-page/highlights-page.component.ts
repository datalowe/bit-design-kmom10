import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MEDIUM_SCREEN_MIN_WIDTH_PX } from '../../shared_utils/constants';

@Component({
  selector: 'app-highlights-page',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './highlights-page.component.html',
  styleUrl: './highlights-page.component.scss',
})
export class HighlightsPageComponent {
  mediumScreenMinWidth = MEDIUM_SCREEN_MIN_WIDTH_PX;
  pastProjects = [
    {
      title: 'Växla upp!',
      description:
        'I created a web page with data visualizations for the Region Blekinge project Växla upp!, which involved GPS data from hundreds of cyclists over a period of about six months. I used the Python framework Dash for creating the visualizations. The project also involved orchestrating Docker containers, including one for the Python app and another for the database.',
      pictureSrc: 'vaxlaupp_aktivitetskarta',
      pictureAltText: 'A screenshot of the Växla Upp visualizations website as shown on a mobile device',
      origWidth: 496,
      origHeight: 1078,
    },
    {
      title: 'Machinations Design',
      description:
        'This project was a personal portfolio website for Design and Products Development master student Amanda Gren. I set up the website, accessible at <a href="https://machinations.design">machinations.design</a>, with the Django-based CMS <a href="https://wagtail.org">Wagtail</a>.',
      pictureSrc: 'machinationsdesign_startpage',
      pictureAltText: 'A screenshot of the Machinations Design website as shown on a mobile device',
      origWidth: 1125,
      origHeight: 2436,
    },
    {
      title: 'sctr',
      description:
        'As part of a small team of developers, I built a booking app for sctr\'s electric scooters, working primarily on the project\'s Laravel backend, Docker container orchestration, and testing framework. The git repository can be seen at <a href="https://github.com/datalowe/pattern-orchestra">GitHub</a>.',
      pictureSrc: 'sctr_booking',
      pictureAltText: 'A screenshot of the sctr booking web app as shown on a mobile device',
      origWidth: 604,
      origHeight: 1294,
    },
  ].sort((a, b) => (a.title < b.title ? -1 : 1));
}
