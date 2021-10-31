import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/orders';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  @Input() orders: Order[] = [];

  columnsOrders: string[] = ['id', 'date', 'name', 'lastname', 'phone', 'amount']; 
  columnsItems: string[] = ['id', 'name', 'category', 'price', 'quantity'];  
  tax = 10/100

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  calculeTotal(items){
    
    let total = items
      .filter(item => item.selected == true)
      .map(item => item.price * item.quantity)
      .reduce( (acc, item) => acc += item, 0)                 

    let taxes = this.tax * total
    let final = total + taxes;        
    return final
  }

  openDialog(order): void {

    const dialogRef = this.dialog.open(DetailComponent, {
      width: '50%',
      data: order.items
    });

  }

}
