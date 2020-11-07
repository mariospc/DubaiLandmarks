import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listAttractionComponent } from './list-attractions/list-attractions.component';
import { AttractionComponent } from './attraction/attraction.component';
import { UpdateAttractionComponent } from './update-attraction/update-attraction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttractionDetailsComponent } from './attraction-details/attraction-details.component';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
// require('dotenv').config();
import { config } from 'dotenv'
// import { from } from 'rxjs';




@NgModule({
  declarations: [
    listAttractionComponent,
    AttractionComponent,
    UpdateAttractionComponent,
    AttractionDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDqj6WfTUnGwxn52QlYkTiuFfXZiyoFK9Y' }),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ShareButtonModule,
    ShareIconsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    listAttractionComponent,
    AttractionComponent,
    UpdateAttractionComponent
  ]
})
export class DubaiAttractionsModule { }
