import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './services/github-api/github-api.service';
import { GitHub } from './services/github-api/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: GitHub.User = {
    avatar_url: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    name: '',
    html_url: ''
  };

  socialMedia: {displayText: string, displayIcon: string, link: string}[] = [
    { displayText: '/dfeprado', displayIcon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', link: 'https://github.com/dfeprado' },
    { displayText: '/in/dfeprado', displayIcon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', link: 'https://linkedin.com/in/dfeprado' },
    { displayText: '/dfeprado', displayIcon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', link: 'https://instagram.com/dfeprado' },
  ];

  get pictureStyle(): any {
    return {
      'background-image': `url(${this.user.avatar_url})`
    };
  }
  
  constructor(private github: GithubApiService) {}

  ngOnInit(): void {
    this.github.fetchSelf()
      .subscribe(user => this.user = user);
  }
}
