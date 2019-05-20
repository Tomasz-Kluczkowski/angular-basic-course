import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export class Customer {
  customerCode: string = '';
  customerName: string = '';
  customerAmount: number = 0;
  formCustomerGroup: FormGroup = null;
  constructor() {
    const builder = new FormBuilder();
    this.formCustomerGroup = builder.group({});
    this.formCustomerGroup.addControl('CustomerNameControl', new FormControl('', Validators.required));

    const validationCollection = [];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));
    this.formCustomerGroup.addControl(
      'CustomerCodeControl',
      new FormControl('', Validators.compose(validationCollection))
    );
  }
}
