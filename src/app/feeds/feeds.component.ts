import { Component, OnInit } from '@angular/core';
import { faCommentDots , faHeart} from '@fortawesome/free-solid-svg-icons';
import {Feed} from '../Feed'
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  feeds : Feed [] = []

faHeart = faHeart;
faCommentDots =faCommentDots
  constructor() { 
  }


  ngOnInit(): void {
    console.log('test1',localStorage.getItem('feeds'))
    this.feeds = JSON.parse(localStorage.getItem('feeds') || '[]');
    console.log('test storage get',this.feeds);
    

  }

  log(val:any) { console.log(val); }

  increment(feed:Feed){
    console.log(feed)
    const objIndex  =this.feeds.findIndex((obj => obj.id == feed.id));
    this.feeds[objIndex].likes +=1;
    localStorage.setItem('feeds',JSON.stringify(this.feeds) );

  }

}
