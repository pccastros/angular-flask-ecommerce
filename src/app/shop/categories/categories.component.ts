import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../../models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Input() categories:string[] = [];
  @Output() nextScreen:EventEmitter<any> = new EventEmitter();
  @Output() onSelectCategory:EventEmitter<Item> = new EventEmitter()

  constructor( private itemService: ItemService) { }

  onSelect(category){
    this.nextScreen.emit();
    this.onSelectCategory.emit(category);
  }
  
}
