import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listAttractionComponent } from './dubai-attractions/list-attractions/list-attractions.component';
import { AttractionDetailsComponent } from './dubai-attractions/attraction-details/attraction-details.component';
import { UpdateAttractionComponent } from './dubai-attractions/update-attraction/update-attraction.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: 'attractions', component: listAttractionComponent },
  { path: 'attractions/:id', component: AttractionDetailsComponent },
  { path: 'attractions/update/:id', component: UpdateAttractionComponent },
  { path: 'user/login', component: LoginComponent},
  { path: '**', redirectTo:'/attractions'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }