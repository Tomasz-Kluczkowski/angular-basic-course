import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomerComponent} from './CustomerApp.CustomerComponent';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {CustomerRoutes} from '../Routing/CustomerApp.CustomerRouting';
import {GridComponent} from '../../utility/CustomerApp.GridComponent';
import {MyInterceptor} from '../../utility/Utility.HttpInterceptor';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true
    }
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
