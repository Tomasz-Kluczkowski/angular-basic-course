import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HomeComponent} from './CustomerApp.HomeComponent';
import {MasterPageComponent} from './CustomerApp.MasterPageComponent';
import {RouterModule} from '@angular/router';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
