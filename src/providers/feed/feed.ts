import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FeedProvider {

  apiUrl:string;
  feedUrl: string;

  constructor(public http: Http) {
    this.apiUrl = 'https://api.rss2json.com/v1/api.json';
    this.feedUrl = 'http://rss.cnn.com/rss';
  }

  getStories(topic) {
    
    return this.http.get(this.apiUrl+'?rss_url='+this.feedUrl+'/'+topic+'.rss').map(res => res.json());
  }
}
