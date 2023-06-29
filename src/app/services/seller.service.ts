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
 console.warn(data);
this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
{observe:'response'}).subscribe((res:any)=>{
  console.warn(res);
  if(res && res.body && res.body.length){
       localStorage.setItem('seller',JSON.stringify(res.body))
       this.route.navigate(['seller-home'])
  }else{
    console.log('user login fail')
    this.isLoginError.emit(true);
  }
})
  } 
}
