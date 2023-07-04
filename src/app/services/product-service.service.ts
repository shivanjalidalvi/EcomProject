import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { product } from '../dataTypes';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    //console.warn("service call");
   return this.http.post('http://localhost:3000/product',data);
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/product');
  }

  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/product/${id}`)
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/product/${id}`);
  }

}
