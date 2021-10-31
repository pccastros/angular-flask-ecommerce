import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.scss']
})
export class FooterButtonsComponent implements OnInit {

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
