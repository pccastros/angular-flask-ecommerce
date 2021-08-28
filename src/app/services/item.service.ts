import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  total = 0;
  quantity = 0;


  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    let url = 'http://localhost:5000/getProducts';
    return this.http.get<Item[]>(url);
  }

  /*
  getItems(){
    let url = 'http://localhost:5000/getProducts';
    this.http.get<Item[]>(url).subscribe( data => {
      this.items = data;
      return true
    })
  }

  getCategories(){
    console.log(this.items)
    let categories = Array.from(new Set(this.items.map(item => item.category)));
    return categories
  }
  */
  /*

  onSelect(item:Item){
    item.selected = !item.selected;
    console.log("Total")
   
    if (item.selected){
      item.quantity = 1;
    }else{
      item.quantity = 0;
    }

    this.getTotal();
  }

  onSelectCategory(category){
    this.currentItems = this.items.filter(item => item.category == category)
  }

  addQuantity(item:Item){
    item.quantity += 1;
  }

  removeQuantity(item:Item){
    if (item.quantity > 0){
      item.quantity -= 1;

      if (item.quantity == 0){
        this.onSelect(item);
      }
    }
  }

  getTotal(){
    this.total = this.items
                  .filter(item => item.selected == true)
                  .map(item => item.price * item.quantity)
                  .reduce( (acc, item) => acc += item, 0)
    
    console.log(this.items
      .filter(item => item.selected == true)
      .map(item => item.quantity)
      .reduce( (acc, item) => acc += item, 0)
      )
    console.log("---------------------------")
    return this.total;
  }
*/
  /*
  getQuantity(){
    this.quantity = this.items
                    .filter(item => item.selected == true)
                    .map(item => item.quantity)
                    .reduce( (acc, item) => acc += item, 0)
    
    console.log(this.quantity)
    return this.quantity;
  }
  */
/*
  getCategoryItems(category){
    this.currentItems = this.items.filter(item => item.category == category)
  }
*/
}
