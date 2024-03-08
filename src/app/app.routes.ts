import { Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HighlightsPageComponent } from './components/highlights-page/highlights-page.component';

export const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'highlights', component: HighlightsPageComponent },
];
