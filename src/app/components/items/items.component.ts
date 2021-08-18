import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  items: Item[] = [];
  categories: string[] = [];
  currentCategory: string = '';
  totalPrice = 0;
  totalQnty = 0;

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getCurrentItems();
    this.categories = this.itemService.getCategories();
  }

  selectCategory(category){
    this.currentCategory = category;
    this.itemService.onSelectCategory(category);
    this.items = this.itemService.getCurrentItems();
  }

}
