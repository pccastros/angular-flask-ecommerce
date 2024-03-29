import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'image', 'price', 'quantity',  'tprice',];
  displayedColumns2: string[] = ['empty', 'empty', 'empty', 'empty', 'stTitle', 'stAmount'];
  displayedColumns3: string[] = ['empty', 'empty', 'empty', 'empty', 'txTitle', 'txAmount'];
  displayedColumns4: string[] = ['empty', 'empty', 'empty', 'empty', 'fnTitle', 'fnAmount'];
  tax = 10/100
  subtotal: number;
  taxes: number;
  final: number;

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit(): void {
    this.subtotal = this.data.map(i => i.price * i.quantity).reduce((acc, value) => acc + value, 0);
    this.taxes = this.tax * this.subtotal
    this.final = this.subtotal + this.taxes;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
