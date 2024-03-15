import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialLinks = [
    {
      title: "Link to this page's github repository.",
      url: 'https://github.com/datalowe/bit-design-kmom10',
      iconUrl: 'assets/icons/github-icon.svg',
      altText: 'GitHub logo',
    },
    {
      title: "Link to Bew Gorp's Stack Overflow account.",
      url: 'https://stackoverflow.com/users/13825766/datalowe',
      iconUrl: 'assets/icons/stackoverflow-icon.svg',
      altText: 'StackOverflow logo',
    },
    {
      title: "Link to Bew Gorp's Linkedin account.",
      url: 'https://se.linkedin.com/in/lowe-wilsson-818943101',
      iconUrl: 'assets/icons/linkedin-square-icon.svg',
      altText: 'LinkedIn logo',
    },
  ];
  foo = [1, 2, 3];
}
