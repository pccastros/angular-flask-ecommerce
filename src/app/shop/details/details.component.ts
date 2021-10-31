import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/items';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'image', 'price', 'quantity',  'tprice',];
  displayedColumns2: string[] = ['empty', 'empty', 'empty', 'empty', 'stTitle', 'stAmount'];
  displayedColumns3: string[] = ['empty', 'empty', 'empty', 'empty', 'txTitle', 'txAmount'];
  displayedColumns4: string[] = ['empty', 'empty', 'empty', 'empty', 'fnTitle', 'fnAmount'];
  tax = 10/100
  subtotal: number;
  taxes: number;
  final: number;
  totalQnty: number;
  
  @Input() total:number;
  @Input() items: Item[] = [];


  constructor() { }

  ngOnInit(): void {
    this.subtotal = this.items.map(i => i.price * i.quantity).reduce((acc, value) => acc + value, 0);
    this.taxes = this.tax * this.subtotal
    this.final = this.subtotal + this.taxes;
  }

  getTotalQuantity(){
    return this.items.map(i => i.quantity).reduce((acc, value) => acc + value, 0);
  }

}
