import { Component, OnInit } from '@angular/core';
import { faChevronUp , faChevronDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
faChevronUp = faChevronUp;
faChevronDown = faChevronDown
show:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  showHide(){
    this.show = ! this.show
  }
}
