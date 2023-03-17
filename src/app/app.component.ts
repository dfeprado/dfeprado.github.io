import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socialMedia: {displayText: string, displayIcon: string, link: string}[] = [
    { displayText: '/dfeprado', displayIcon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', link: 'https://github.com/dfeprado' },
    { displayText: '/in/dfeprado', displayIcon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', link: 'https://linkedin.com/in/dfeprado' },
    { displayText: '/dfeprado', displayIcon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', link: 'https://instagram.com/dfeprado' },
  ];
  
  constructor() {}
}
