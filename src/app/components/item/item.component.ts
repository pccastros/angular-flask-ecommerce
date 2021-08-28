import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();

  constructor( private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onSelectItem(item:Item){
    //this.itemService.onSelect(item);
  }

  addQnty(item:Item){
    //this.itemService.addQuantity(item);
  }

  remQnty(item:Item){
    //this.itemService.removeQuantity(item);
  }

}
