import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MEDIUM_SCREEN_MIN_WIDTH_PX } from '../../shared_utils/constants';

@Component({
  selector: 'app-highlights-page',
  standalone: true,
  imports: [NgClass, NgFor, NgOptimizedImage],
  templateUrl: './highlights-page.component.html',
  styleUrl: './highlights-page.component.scss',
})
export class HighlightsPageComponent {
  mediumScreenMinWidth = MEDIUM_SCREEN_MIN_WIDTH_PX;
  pastProjects = [
    {
      title: 'Växla upp!',
      description:
        'I created a web page with data visualizations for the Region Blekinge project Växla upp!, which involved GPS data from hundreds of cyclists over a period of about six months. I used the Python framework <a href="https://dash.plotly.com/" target="_blank">Dash</a> for creating the visualizations. The project also involved orchestrating <a href="https://www.docker.com/" target="_blank">Docker</a> containers, including one for the Python app and another for the database.',
      pictureSrc: 'vaxlaupp_resemonster',
      pictureAltText: 'A screenshot of the Växla Upp visualizations website as shown on a mobile device',
      origWidth: 2556,
      origHeight: 1380,
    },
    {
      title: 'Machinations Design',
      description:
        'This project was a personal portfolio website for Design and Products Development master student Amanda Gren. I set up the website, accessible at <a target="_blank" href="https://machinations.design">machinations.design</a>, with the Django-based CMS <a target="_blank" href="https://wagtail.org">Wagtail</a>.',
      pictureSrc: 'machinationsdesign_startpage',
      pictureAltText: 'A screenshot of the Machinations Design website as shown on a mobile device',
      origWidth: 1125,
      origHeight: 2436,
    },
    {
      title: 'sctr',
      description:
        'As part of a small team of developers, I built a booking app for sctr\'s electric scooters, working primarily on the project\'s <a href="https://laravel.com/" target="_blank">Laravel</a> backend, <a href="https://www.docker.com/" target="_blank">Docker</a> container orchestration, and testing framework. The main git repository can be seen at <a target="_blank" href="https://github.com/datalowe/pattern-orchestra">GitHub</a>.',
      pictureSrc: 'sctr_booking',
      pictureAltText: 'A screenshot of the sctr booking web app as shown on a mobile device',
      origWidth: 604,
      origHeight: 1294,
    },
    {
      title: 'CoText',
      description:
        'Using <a target="_blank" href="https://angular.io/">Angular</a> together with <a target="_blank" href="https://quilljs.com/">Quill Editor</a>, I created a text editor which allowed multiple users to share documents and work on them in parallel. It also included functionality for test running collaborative code snippets. The source code for both the <a target="_blank" href="https://github.com/datalowe/text-editor-angular">frontend</a> and the Express-based <a target="_blank" href="https://github.com/datalowe/text-editor-backend">backend</a> is available on GitHub.',
      pictureSrc: 'code_editor',
      pictureAltText:
        "A screenshot from a desktop view of CoText, where a user is editing a 'Hello World!' sample JS code snippet",
      origWidth: 2560,
      origHeight: 1390,
    },
    {
      title: 'MyMap',
      description:
        'A travel agency requested a travel planning app, and so I created MyMap as a WebView-based Android and iOS application with <a target="_blank" href="https://mithril.js.org/">Mithril</a> and <a target="_blank" href="https://cordova.apache.org/">Cordova</a>, and I also set up a backend using <a target="_blank" href="https://www.django-rest-framework.org/">Django Rest Framework</a>. The app enabled users to search for and mark destinations with different labels, and offered a \'weather toggle\' that flips all destinations to weather forecasts for each location, using data from <a target="_blank" href="https://developer.yr.no/">yr.no</a>. You can find the source code on GitHub for <a target="_blank" href="https://github.com/datalowe/mymap">MyMap</a> itself and the backend <a target="_blank" href="https://github.com/datalowe/mapback">MapBack</a>.',
      pictureSrc: 'mymap',
      pictureAltText:
        "A screenshot from a mobile device view of the MyMap app, with a 'museum'/culture marker close to the city Karlskrona and a 'question mark' marker at a longitude/latitude-based location that the user is currently setting. The image also shows a search bar with a magnifying class, a filter icon, a weather icon, and a crosshairs 'go to my current location' icon.",
      origWidth: 660,
      origHeight: 1168,
    },
  ].sort((a, b) => (a.title < b.title ? -1 : 1));
}
