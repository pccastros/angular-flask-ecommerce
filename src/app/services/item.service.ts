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

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    let url = 'http://localhost:5000/getProducts';
    return this.http.get<Item[]>(url);
  }

  addOrder(data): Observable<any>{
    let url = 'http://localhost:5000/createOrder';
    return this.http.post<Item>(url, data, this.httpOptions);
  }

  getOrders(): Observable<any>{
    let url = 'http://localhost:5000/getOrders';
    return this.http.get<Item[]>(url);
  }
}
