import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders:any;
  constructor(private adminService:AdminService,
    private snackBar:MatSnackBar){}

  ngOnInit(){
    this.getplacedOrders();
  }
  getplacedOrders(){
    this.adminService.getplacedOrders().subscribe(res=>{
      this.orders=res;
    })
  }
  changeOrderStatus(orderId: number, status:string){
    this.adminService.changeOrderStatus(orderId,status).subscribe(res=>{
      if(res.id!=null){
        this.snackBar.open("Order status changed successfully","Cloe", {
          duration:5000});
          this.getplacedOrders();
      }else{
        this.snackBar.open("Something went wrong","Close",{duration:5000});
      }
    })
  }



}
