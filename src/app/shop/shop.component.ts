import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/items';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  title = 'angular-flask-ecommerce';
  screen = 0;
  total = 0;
  quantity = 0;
  currentCategory: string = '';
  finish = false;
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

  getSelectecItems(){
    return this.items.filter(item => item.selected == true);
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

    let idx = this.items.findIndex((it => it.id == item.id));
    let state = this.items[idx].selected
    let newState = !state
    this.items[idx].selected = newState

    if (newState){
      this.items[idx].quantity = 1;
    }else{
      this.items[idx].quantity = 0;
    }

  }

  onFinishOrder(){
    this.finish = true;
    this.items = [];
  }

  getFinishState(){
    return this.finish;
  }

  getTotal(){
    this.total = this.items
                  .filter(item => item.selected == true)
                  .map(item => item.price * item.quantity)
                  .reduce( (acc, item) => acc += item, 0)                     
    return this.total
  }

  getQuantity(){
    this.quantity = this.items
                    .filter(item => item.selected == true)
                    .map(item => item.quantity)
                    .reduce( (acc, item) => acc += item, 0)

    return this.quantity
  }

  onAddQuantity(item:Item){
    let idx = this.items.findIndex((it => it.id == item.id));
    this.items[idx].quantity += 1;
  }

  onRemoveQuantity(item:Item){

    let idx = this.items.findIndex((it => it.id == item.id));

    if (this.items[idx].quantity > 0){
      this.items[idx].quantity -= 1;

      if (this.items[idx].quantity == 0){
        this.onSelectItem(item);
      }
    }
  }



  nextScreen(){
    this.screen += 1;
  }

  prevScreen(){
    this.screen -= 1;
  }

}
