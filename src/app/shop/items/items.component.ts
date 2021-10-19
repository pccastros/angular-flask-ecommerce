import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  //currentCategory: string = '';
  totalPrice = 0;
  totalQnty = 0;

  @Input() items: Item[] = [];
  @Input() categories:string[] = [];
  @Input() currentCategory:string = '';
  @Output() onSelectCategory:EventEmitter<Item> = new EventEmitter()
  @Output() onSelectItem:EventEmitter<Item> = new EventEmitter()
  @Output() onAddQuantity:EventEmitter<Item> = new EventEmitter()
  @Output() onRemoveQuantity:EventEmitter<Item> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.items)
  }

  selectCategory(category){
    this.currentCategory = category;
    this.onSelectCategory.emit(category);
  }

  selectItem(category){
    this.onSelectItem.emit(category);
  }

  addQuantity(category){
    this.onAddQuantity.emit(category);
  }

  removeQuantity(category){
    this.onRemoveQuantity.emit(category);
  }

}
