import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/items';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity'];

  customer: Customer = new Customer();
  customerForm!: FormGroup;

  @Input() total:number;
  @Input() items: Item[] = [];
  @Output() finishOrder:EventEmitter<any> = new EventEmitter();

  constructor( private itemService:ItemService, private router:Router) {

  }

  ngOnInit(): void {

    this.customerForm = new FormGroup({
      name: new FormControl(this.customer.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastname: new FormControl(this.customer.lastname, [
        Validators.required,
        Validators.minLength(4),
      ]),
      address: new FormControl(this.customer.address, [
        Validators.required,
        Validators.minLength(10),
      ]),
      phone: new FormControl(this.customer.phone, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
      ]),
      delivery: new FormControl(this.customer.delivery, [
        Validators.required])
    });
  }

  onSubmit(){

    console.log(this.customerForm.value.delivery)
    this.customerForm.value.delivery = this.customerForm.value.delivery.toISOString().split('T')[0];
    let order = {
      customer: this.customerForm.value,
      items: this.items
    }

    let date = (new Date()).toISOString().split('T')[0];
    let hour = (new Date()).toISOString().split('T')[1].split('.')[0]
    let time = date + ' ' + hour
    order.customer.date = time;
    
    this.itemService.addOrder(order).subscribe(data => {
      this.finishOrder.emit()
    })

  }

  newOrder(){
    this.router.navigate(['/newOrder'])
  }

  getTotalCost(){
    return this.items.map(i => i.price).reduce((acc, value) => acc + value, 0);
  }

  getTotalQuantity(){
    return this.items.map(i => i.quantity).reduce((acc, value) => acc + value, 0);
  }

  get name() { return this.customerForm.get('name')!; }
  get lastname() { return this.customerForm.get('lastname')!; }
  get address() { return this.customerForm.get('address')!; }
  get phone() { return this.customerForm.get('phone')!; }
  get delivery() { return this.customerForm.get('delivery')!; }

}
