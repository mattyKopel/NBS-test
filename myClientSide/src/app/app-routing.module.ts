import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DisplayDistanceComponent} from './components/display-distance/display-distance.component';
import {SendPlacesComponent} from'./components/send-places/send-places.component';
import {AppComponent} from './app.component'
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  
  {path: '', component:BaseComponent},
  {path:'displayDistance', component:DisplayDistanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
