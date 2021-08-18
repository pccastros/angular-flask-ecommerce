import { Component } from '@angular/core';
import { ItemService } from './services/item.service';

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

  constructor( private itemService:ItemService) {}

  
  nextScreen(){
    this.screen += 1;
  }

  prevScreen(){
    this.screen -= 1;
  }

}
