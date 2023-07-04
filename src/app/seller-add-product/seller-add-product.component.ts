import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { product } from '../dataTypes';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
 productMessage:string|undefined;
  constructor(private productservice:ProductServiceService){}

  ngOnInit(): void{
  }

  submit(data:product){
 //console.warn(data);
 this.productservice.addProduct(data).subscribe((result)=>{
  console.warn(result);
  if(result){
    this.productMessage='product add successfuly'
  }
  setTimeout(()=>(this.productMessage=undefined),3000);
 })
  }
}
