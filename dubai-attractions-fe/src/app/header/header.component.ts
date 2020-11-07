import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginComponent } from '../users/login/login.component';
// import { AttractionComponent } from '../dubai-attractions/attraction/attraction.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(LoginComponent) loginComponent:LoginComponent
  user;
  responsive;
  view = false
  constructor(
    private router:Router,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {           
    if (JSON.parse(this.userService.getUserFromCookies('user')) !== undefined){     
      this.user = JSON.parse(this.userService.getUserFromCookies('user')).username;
    }
  }

  goHome() {
    const url = '/attractions/'
    this.router.navigate([url]);
    if (this.responsive){
      this.responsive = false;
    }
  }

  logIn(){
    this.view = true; 
    this.loginComponent.ngOnInit(); 
    if (this.responsive){
      this.responsive = false;
    }
  }

  logOut(){
    this.spinner.show();
    this.userService.logOut().subscribe(response => {
      this.user = undefined;
      this.spinner.hide();
      this.goHome();
    });
    if (this.responsive){
      this.responsive = false;
    }
  }

  submitLogIn(username){
    this.user = username;    
  }

  changeHeaderStructure(){
    if (this.responsive){
      this.responsive = false;
    }else {
      this.responsive = true;
    }
  }
}
