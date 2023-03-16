import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHub } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private endpoint = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  fetchSelf(): Observable<GitHub.User> {
    return this.http.get<GitHub.User>(this.getUrl('user'));
  }

  private getUrl(path: string = ''): string {
    return `${this.endpoint}/${path}`;
  }
}
