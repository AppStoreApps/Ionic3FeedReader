import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FeedProvider } from '../../providers/feed/feed';

@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  topic: String;
  stories: Array<any>;

  constructor(public feedProvider: FeedProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.topic = 'edition';
    this.getStories();
  }

  getStories() {
    this.feedProvider.getStories(this.topic).subscribe(res => {
      console.log(res.items);
      this.stories = res.items;
      
    })
  }
}
