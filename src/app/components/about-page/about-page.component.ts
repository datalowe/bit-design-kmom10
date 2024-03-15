import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {}
