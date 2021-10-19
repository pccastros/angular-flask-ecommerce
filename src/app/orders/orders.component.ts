import { Component, OnInit } from '@angular/core';
import { Item } from '../models/items';
import { Order } from '../models/orders';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  quantity = 0;
  orders: Order[] = [];
  items: Item[] = [];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {

    this.itemService.getOrders().subscribe( data => { 
      this.orders = data
      console.log(this.orders)
      //this.categories = Array.from(new Set(this.items.map(item => item.category)));
    })

    //this.itemService.getItems().subscribe( data => { 
    //  this.items = data
    //})

  }

  getQuantity(){
    this.quantity = this.items
                    .filter(item => item.selected == true)
                    .map(item => item.quantity)
                    .reduce( (acc, item) => acc += item, 0)

    return this.quantity
  }

  getOrders(){
    return this.orders;
  }


}
