import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../../models/items';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  @Input() categories:string[] = [];
  @Input() icons:string[] = [];
  @Output() nextScreen:EventEmitter<any> = new EventEmitter();
  @Output() onSelectCategory:EventEmitter<Item> = new EventEmitter()

  constructor( private itemService: ItemService) { }

  ngOnInit(): void {
    console.log(this.categories)
  }

  onSelect(category){
    this.nextScreen.emit();
    this.onSelectCategory.emit(category);
  }
  
}
