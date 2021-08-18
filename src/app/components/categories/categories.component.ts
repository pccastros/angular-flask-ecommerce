import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../../models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


  @Output() nextScreen:EventEmitter<any> = new EventEmitter();
  @Output() prevScreen:EventEmitter<any> = new EventEmitter();

  categories: string[] = [];

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    this.categories = this.itemService.getCategories();
  }

  onSelect(category){
    this.nextScreen.emit();
    this.itemService.onSelectCategory(category);
  }
  
}
