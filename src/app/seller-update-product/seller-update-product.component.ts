import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { product } from '../dataTypes';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{

  productData:undefined | product;

  constructor(private route:ActivatedRoute,private productservice:ProductServiceService){}

ngOnInit(): void {
   let productId=this.route.snapshot.paramMap.get('id');
   console.warn(productId);
   productId && this.productservice.getProduct(productId).subscribe((result)=>{
    console.warn(result);
    this.productData=result;
   })
}

  submit(data:any){
  }
}
