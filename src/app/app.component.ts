import {Component} from '@angular/core';
import { MetaService } from './meta.service';
import { Location, DOCUMENT } from '@angular/common';
 import { Renderer2, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'brandstory';
	isVisible="displayfooter";
	pageLanding="";
	CODESCRIPT="";
  constructor(private metaService: MetaService,location: Location) {
  this.isVisible="displayfooter";
	  this.pageLanding=location.path();
	  if(this.pageLanding=="seocamp/"||this.pageLanding=="seocamp")
		  this.isVisible="ndisplayfooter";
  }
  ngOnInit() {

    this.metaService.createCanonicalURL();

  }

}
