import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-list-attractions',
  templateUrl: './list-attractions.component.html',
  styleUrls: ['./list-attractions.component.css'],
  providers: [NgbCarouselConfig]
})
export class listAttractionComponent implements OnInit {

  user;
  attractionList;
  constructor(
    private attractions:AttractionsService,
    config: NgbCarouselConfig,
    private spinner: NgxSpinnerService
    ) {
    this.attractions.getAttractions().subscribe(data =>{     
      this.attractionList = data; 
      this.spinner.hide();     
    }); 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    
  }

  ngOnInit(): void {
    this.spinner.show();
  }

}
