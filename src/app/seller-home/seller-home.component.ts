import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { product } from '../dataTypes';
import { HttpClient } from '@angular/common/http';
import { faCoffee,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  
productList:undefined | product[];
productDelete:undefined |string;
icon=faTrash;
editIcon=faEdit;
  constructor(private product:ProductServiceService,http:HttpClient){}

  ngOnInit(){
this.List();
  }

  deleteProduct(id:number){
    console.warn(id)
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
     this.productDelete='Product deleted sucessfully';
     this.List()
      }
    })
    setTimeout(()=>(this.productDelete=undefined),3000)
  } 


  List(){
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
    })
  }

  
}
