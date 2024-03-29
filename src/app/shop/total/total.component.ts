import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  @Input() total:number = 0;
  @Output() nextScreen:EventEmitter<any> = new EventEmitter();
  @Output() prevScreen:EventEmitter<any> = new EventEmitter();

  constructor( private itemService:ItemService) { }

  ngOnInit(): void {
    //this.total = this.itemService.getTotal();
    console.log(this.total)
  }

  onNext(){
    this.nextScreen.emit()
  }

  onBack(){
    this.prevScreen.emit()
  }

}
