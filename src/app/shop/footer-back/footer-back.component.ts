import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-footer-back',
  templateUrl: './footer-back.component.html',
  styleUrls: ['./footer-back.component.scss']
})
export class FooterBackComponent implements OnInit {

  @Input() total:number = 0;
  @Input() finish:boolean = false;
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
