import {Component, Injector} from '@angular/core';
import {Customer} from './CustomerApp.model';
import {BaseLogger} from '../../utility/CustomerApp.Logger';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
  styleUrls: ['../app.component.css']
})
export class CustomerComponent {
  title = 'CustomerApplication';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  logger: BaseLogger = null;
  disablePost: boolean = false;

  constructor(injector: Injector, public http: HttpClient) {
    this.logger = injector.get('1');
    this.logger.log();
  }

  postToServer() {
    this.disablePost = true;
    const customerDTO: any = {};
    customerDTO.customerCode = this.customerModel.customerCode;
    customerDTO.customerName = this.customerModel.customerName;
    customerDTO.customerAmount = this.customerModel.customerAmount;
    this.http.post('http://localhost:3000/Customers', customerDTO).subscribe(
      res => this.success(res), res => this.error(res)
    );
  }

  getFromServer() {
    this.http.get('http://localhost:3000/Customers').subscribe(
      res => this.successGet(res), res => this.error(res)
    );
  }

  error(res) {
    console.log(res);
  }

  success(res) {
    this.getFromServer();
  }

  successGet(res) {
    this.customerModels = res;
    this.disablePost = false;
    this.customerModel = new Customer();
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
