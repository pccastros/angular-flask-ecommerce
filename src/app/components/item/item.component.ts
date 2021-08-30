import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() selectItem:EventEmitter<Item> = new EventEmitter()
  @Output() addQuantity:EventEmitter<Item> = new EventEmitter()
  @Output() removeQuantity:EventEmitter<Item> = new EventEmitter()

  constructor( private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onSelectItem(item:Item){
    this.selectItem.emit(item)
  }

  addQnty(item:Item){
    this.addQuantity.emit(item)
  }

  remQnty(item:Item){
    this.removeQuantity.emit(item)
  }

}
