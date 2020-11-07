import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DubaiAttractionsModule } from './dubai-attractions/dubai-attractions.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';
import { Ng2ImgMaxModule } from 'ng2-img-max';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    DubaiAttractionsModule,
    UsersModule,
    NgxSpinnerModule,
    Ng2ImgMaxModule
  ],
  exports: [
    RouterModule
  ],
  providers: [NgbModalConfig, NgbModal, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
