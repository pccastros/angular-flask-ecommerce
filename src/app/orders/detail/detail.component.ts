import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/orders';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DetailComponent implements OnInit {

  @Input() orders: Order[] = [];

  columnsOrders: string[] = ['id', 'date', 'name', 'lastname', 'phone', 'amount']; 
  columnsItems: string[] = ['id', 'name', 'category', 'price', 'quantity'];  


  constructor() { }

  ngOnInit(): void {

  }

  calculeTotal(items){
    
    let total = items
      .filter(item => item.selected == true)
      .map(item => item.price * item.quantity)
      .reduce( (acc, item) => acc += item, 0)                     
    return total
  }

}
