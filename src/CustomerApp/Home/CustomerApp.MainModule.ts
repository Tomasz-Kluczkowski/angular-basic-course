import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HomeComponent} from './CustomerApp.HomeComponent';
import {MasterPageComponent} from './CustomerApp.MasterPageComponent';
import {RouterModule} from '@angular/router';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';
import {BaseLogger, ConsoleLogger, DbLogger} from '../../utility/CustomerApp.Logger';

@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [
    {
      provide: BaseLogger,
      useClass: ConsoleLogger
    },
    {
      provide: '1', useClass: DbLogger
    },
    {
      provide: '2', useClass: ConsoleLogger
    }
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
