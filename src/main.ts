import { AppComponent } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = savedTheme || (prefersDark ? 'dark' : 'light');
document.body.classList.add(`theme-${theme}`);
