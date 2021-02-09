import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageLanding = "";
  isVisible = "displaynav";
  constructor(private route: ActivatedRoute, location: Location) {
    //console.log(location.path());
    this.pageLanding = location.path();

  }

  ngOnInit() {

    if (this.pageLanding == "seocampaign/")
      this.isVisible = "ndisplaynav";

  }
  isDisplay() {
    if (this.pageLanding == "seocampaign/")
      this.isVisible = "ndisplaynav";

    return this.isVisible;
  }
  isCollapsed = true;
}
