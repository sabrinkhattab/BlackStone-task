import { Component, OnInit } from '@angular/core';
import {Stories} from '../mock-stories'
import {Story} from '../Story'
@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories : Story[] = Stories
  constructor() { }

  ngOnInit(): void {
  }

}
