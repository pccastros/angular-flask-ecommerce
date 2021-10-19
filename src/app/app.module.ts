import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './shop/items/items.component';
import { ItemComponent } from './shop/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { CategoriesComponent } from './shop/categories/categories.component';
import { TotalComponent } from './shop/total/total.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './shop/customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {Ng2TelInputModule} from 'ng2-tel-input';

import {MatTableModule} from '@angular/material/table';
import { OrdersComponent } from './orders/orders.component';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './orders/detail/detail.component';

import {MatDialogModule} from '@angular/material/dialog';

const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    CategoriesComponent,
    TotalComponent,
    CustomerComponent,
    OrdersComponent,
    ShopComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    materialModules,
    Ng2TelInputModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
