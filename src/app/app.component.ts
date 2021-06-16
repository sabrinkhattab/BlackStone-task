import { Component ,OnInit} from '@angular/core';
import {Feeds} from './mock-feeds'
import {Feed} from './Feed'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-test';

  ngOnInit(): void {
   const feeds : Feed[] = Feeds;
  if(localStorage.getItem('feeds') === null){
    localStorage.setItem('feeds' ,JSON.stringify(feeds));
  } 
    //const feedsJsonString = (localStorage.getItem('feeds')!== null)?localStorage.getItem('feeds'):'{}';
    // console.log('test1',localStorage.getItem('feeds'))
    // this.feeds = JSON.parse(localStorage.getItem('feeds') || '[]');
    // console.log('test storage get',this.feeds);
    // this.counter = Number(localStorage.getItem('likes'));
        // this.feeds = JSON.parse(localStorage.getItem('feeds'));

  }
}
