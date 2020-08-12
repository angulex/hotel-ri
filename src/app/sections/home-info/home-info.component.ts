import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {}

  scrollToAnchor(anchor: string) {
    this.sharedService.scrollToAnchor(anchor);
  }
}
