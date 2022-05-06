import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as OverLord from './baseclass';
import {homePage} from "./homepage/homepage.component"

@NgModule({
  declarations: [
    AppComponent,
    homePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
],
  bootstrap: []
})
export class AppModule { }
