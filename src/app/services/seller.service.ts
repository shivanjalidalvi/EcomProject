import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { SignUp,login } from '../dataTypes';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

isSellerLoggedIn=new BehaviorSubject<boolean>(false);
isLoginError=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private route:Router) { }
  
  userSignUp(data:SignUp){ 
   this.http.post('http://localhost:3000/seller',
   data,
   {observe:'response'}).subscribe(res=>{
     console.log("result",res);
     if(res){
       localStorage.setItem('seller',JSON.stringify(res.body))
       this.route.navigate(['seller-home'])
     }
    
   })
   
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home'])
    }
  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('seller',JSON.stringify(result.body))
       this.route.navigate(['seller-home'])
     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }
  
}
