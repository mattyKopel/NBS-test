import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendPlacesComponent } from './components/send-places/send-places.component';
import {MyServService } from "./services/my-serv.service";
import { DisplayDistanceComponent } from './components/display-distance/display-distance.component';
import { BaseComponent } from './components/base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularListComponent } from './components/popular-list/popular-list.component';
import { ItemInListComponent } from './components/item-in-list/item-in-list.component';
import { ItemDataComponent } from './components/item-data/item-data.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SendPlacesComponent,
    DisplayDistanceComponent,
    BaseComponent,
    PopularListComponent,
    ItemInListComponent,
    ItemDataComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyServService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
