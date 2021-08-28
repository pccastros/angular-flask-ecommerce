import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  //total:number = 0
  @Input() total:number = 0;
  @Output() nextScreen:EventEmitter<any> = new EventEmitter();
  @Output() prevScreen:EventEmitter<any> = new EventEmitter();

  constructor( private itemService:ItemService) { }

  ngOnInit(): void {
    //this.total = this.itemService.getTotal();
  }

  onNext(){
    this.nextScreen.emit()
  }

  onBack(){
    this.prevScreen.emit()
  }

}
