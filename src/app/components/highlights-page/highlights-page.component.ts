import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './highlights-page.component.html',
  styleUrl: './highlights-page.component.scss',
})
export class HighlightsPageComponent {
  pastProjects = [
    {
      title: 'Växla upp!',
      description:
        'I created a web page with data visualizations for the Region Blekinge project Växla upp!, which involved GPS data from hundreds of cyclists over a period of about six months. I used the Python framework Dash for creating the visualizations. The project also involved orchestrating Docker containers, including one for the Python app and another for the database.',
      pictureUrl: '/assets/past-projects/vaxlaupp_aktivitetskarta.png',
    },
    {
      title: 'Machinations Design',
      description:
        'This project was a personal portfolio website for Design and Products Development master student Amanda Gren. I set up the website, accessible at <a href="https://machinations.design">machinations.design</a>, with the Django-based CMS <a href="https://wagtail.org">Wagtail</a>.',
      pictureUrl: '/assets/past-projects/machinationsdesign_startpage.png',
    },
    {
      title: 'sctr',
      description:
        'As part of a small team of developers, I built a booking app for sctr\'s electric scooters, working primarily on the project\'s Laravel backend, Docker container orchestration, and testing framework. The git repository can be seen at <a href="https://github.com/datalowe/pattern-orchestra">GitHub</a>.',
      pictureUrl: '/assets/past-projects/sctr_booking.png',
    },
  ].sort((a, b) => (a.title < b.title ? -1 : 1));
}
