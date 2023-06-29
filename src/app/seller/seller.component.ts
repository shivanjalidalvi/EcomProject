import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from '../dataTypes';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  showLogin=false;
 authError:String='';
  constructor(private _seller:SellerService,private router:Router){}
   ngOnInIt():void{
    this._seller.reloadSeller();
      }
  signUp(data:SignUp){
  console.warn(data);
  this._seller.userSignUp(data)
  // .subscribe(res=>{
  //   if(res){
  //     this.router.navigate(['seller-home'])
  //   }
  // })
  }

  openLogin(){
  this.showLogin=true;
  }
  
  openSignUp(){
 this.showLogin=false;
  }

Login(data:login){
 /// console.warn(data);
 this.authError='';
  this._seller.userLogin(data)
  this._seller.isLoginError.subscribe((isError)=>{
    if(isError){
     this.authError="Email or password is incorrect";
    }
  })
}




}
