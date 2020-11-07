import { Component, OnInit, HostListener, ElementRef, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  incorrectData;
  errorMessage = '';
  @Input() signUpDisplay;
  @Output() logIn = new EventEmitter<any>();

  constructor(
    private eRef: ElementRef,
    private userService: UserService,
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.signUpDisplay = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {            
    if(this.eRef.nativeElement.contains(event.target)) {
      this.signUpDisplay = true;
    } else {      
      if(event.target.id == 'signUp'){
        this.signUpDisplay = true;
      }else {
        this.signUpDisplay = false;
      }
    }
  }
  
  createUser(data){
    this.spinner.show();
    const body = {
      username: data.username,
      password: data.password,
      email: data.email
    }
    
    this.userService.signUp(data).subscribe(response => {
      this.toast.success(data.username+' user created!');
      this.signUpDisplay = false;
      this.userService.logIn(body).subscribe(data => {
        this.logIn.next(body);
        this.spinner.hide();
      });
    },
    (error: HttpErrorResponse) =>{
      this.incorrectData = true;
      this.errorMessage = error.error;
      this.spinner.hide();
    });
    
  }
}
