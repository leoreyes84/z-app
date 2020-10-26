import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTimeline(screen_name: string) {
    
    return this.http
      .get<any[]>(this.api_url+'/user_timeline?screen_name='+screen_name);
 
  }
}
