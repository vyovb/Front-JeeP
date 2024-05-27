import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  myOrders:any;
  constructor(private customerServices:CustomerService){}
  ngOnInit(){
    this.getMyOrders();
  }
  getMyOrders(){
    this.customerServices.getOrdersByUserId().subscribe(res=>{
      this.myOrders=res;
    })
  }

}
