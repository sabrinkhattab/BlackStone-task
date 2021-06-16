import { Component, OnInit } from '@angular/core';
import { faBell , faCloudUploadAlt , faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
faBell = faBell;
faCloudUpload = faCloudUploadAlt
faSearch = faSearch
  constructor() { }

  ngOnInit(): void {
  }

}
