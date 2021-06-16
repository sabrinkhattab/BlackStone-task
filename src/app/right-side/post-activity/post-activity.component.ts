import { Component, OnInit } from '@angular/core';
import { faHeart , faCommentDots , faBookmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-activity',
  templateUrl: './post-activity.component.html',
  styleUrls: ['./post-activity.component.scss']
})
export class PostActivityComponent implements OnInit {
faHeart = faHeart
faCommentDots = faCommentDots
faBookMark = faBookmark
  constructor() { }

  ngOnInit(): void {
  }

}
