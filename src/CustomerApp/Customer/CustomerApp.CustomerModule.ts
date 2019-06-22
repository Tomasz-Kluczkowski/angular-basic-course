import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomerComponent} from './CustomerApp.CustomerComponent';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CustomerRoutes} from '../Routing/CustomerApp.CustomerRouting';
import {GridComponent} from '../../utility/CustomerApp.GridComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
