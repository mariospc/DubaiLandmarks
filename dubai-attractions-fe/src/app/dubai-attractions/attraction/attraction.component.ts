import { Component, OnInit, Input } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {

  imgUrl= "//placehold.it/250";
  image: File;
  @Input() attractionItem
  constructor(
    private router: Router,
    public userService: UserService,
    private spinner: NgxSpinnerService
    ){
    
  }
  ngOnInit(): void {              
    if (this.attractionItem.photo !== undefined){
      this.imgUrl = this.attractionItem.photo.url;
    }else {
      this.imgUrl= "//placehold.it/250";
    }
  }

  onClickDetailsButton(attraction){        
    const url = '/attractions/' + attraction.objectId
    this.router.navigate([url]);
  }

  onClicUpdateButton(attraction){        
    const url = '/attractions/update/' + attraction.objectId
    this.router.navigate([url]);
  }
  
}
