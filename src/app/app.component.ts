import { Component } from '@angular/core';
import { ItemService } from './services/item.service';
import { Item } from './models/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-flask-ecommerce';
  screen = 0;
  total = 0;
  quantity = 0;
  currentCategory: string = '';

  currentItems: Item[] = [];
  items: Item[] = [];
  categories: string[] = [];

   constructor( private itemService:ItemService) {

  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe( data => { 
      this.items = data
      this.categories = Array.from(new Set(this.items.map(item => item.category)));
    })
  }
  
  getCurrentItems(){
    return this.currentItems
  }

  getCategories(){
    let categories = Array.from(new Set(this.items.map(item => item.category)));
    return categories
  }

  onSelectCategory(category){
    this.currentCategory = category;
    this.currentItems = this.items.filter(item => item.category == category)
  }

  onSelectItem(item:Item){
    item.selected = !item.selected;
    console.log("Total")
   
    if (item.selected){
      item.quantity = 1;
    }else{
      item.quantity = 0;
    }

    //this.getTotal();
  }


  nextScreen(){
    this.screen += 1;
  }

  prevScreen(){
    this.screen -= 1;
  }

}
