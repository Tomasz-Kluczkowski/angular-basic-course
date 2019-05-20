import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['../app.component.css']
})
export class CustomerComponent {
  title = 'CustomerApplication';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  add() {
    this.customerModels.push(this.customerModel);
    // after adding filled in customer to the array we clear the data from it
    this.customerModel = new Customer();
  }

  hasControlError(controlName: string, validatorType: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(validatorType);
  }
}
