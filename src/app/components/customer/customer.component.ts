import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/models';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  
  customer: Customer = new Customer();

  constructor() { }

  onSubmit(){

  }

  showFormControls(form: any) {
    return form && 
    form.controls.name &&
    form.controls.name.value &&
    form.controls.lastname &&
    form.controls.lastname.value;
  }

}
