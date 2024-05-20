import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboardC/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMat } from '../AngularMat';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMat,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
