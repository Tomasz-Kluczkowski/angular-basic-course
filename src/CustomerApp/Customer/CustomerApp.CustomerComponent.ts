import { Component, Injector } from '@angular/core';
import {Customer} from './CustomerApp.model';
import {BaseLogger} from '../../utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['../app.component.css']
})
export class CustomerComponent {
  title = 'CustomerApplication';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  logger: BaseLogger = null;

  constructor(injector: Injector) {
    this.logger = injector.get('1');
    this.logger.log();
  }

  selectCustomer(selected: Customer) {
    this.customerModel = selected;
  }

  add() {
    this.customerModels.push(this.customerModel);
    // after adding filled in customer to the array we clear the data from it
    this.customerModel = new Customer();
  }

  hasControlError(controlName: string, validatorType: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(validatorType);
  }
}
