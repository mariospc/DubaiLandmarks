import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() logInDisplay;
  @Output() userLogIn = new EventEmitter<string>();
  viewSignUp;
  incorrectData;
  constructor(
    private eRef: ElementRef,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    ){

    }

  ngOnInit(): void {
    this.logInDisplay = false;
    this.incorrectData = false;
    this.viewSignUp = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {    
    // when clicking outside of the pop up disappear/ when inside remain
    if(this.eRef.nativeElement.contains(event.target)) {      
     if (this.viewSignUp === false){
      this.logInDisplay = true;
     }  
    } else {      
      if(event.target.id == 'logIn'){
        this.logInDisplay = true;
      }else {
        this.logInDisplay = false;
      }
    }
  }

  submitLogIn(data){    
    this.spinner.show()    
    this.userService.logIn(data).subscribe(response =>{           
      this.incorrectData = false;
      this.logInDisplay = false;
      this.userLogIn.emit(response['username']);
      this.userService.setUserCookie(response);
      this.spinner.hide();
    }, 
    (error: HttpErrorResponse) =>{
      this.incorrectData = true
      this.spinner.hide();
    })
  }

  signUp(){
    this.logInDisplay = false;
    this.viewSignUp = true;
  }

}
