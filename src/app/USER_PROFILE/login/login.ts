import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, Userprofileservice } from '../userprofileservice';

@Component({
  selector: 'app-login',
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

   ngOnInit(): void {
      
    }
  
    user:User={
    
      userName: '',
      email: '',
      password: '',
      profile:{
        age: 0,
        height: 0,
        weight: 0
      }
    }
  
  
    constructor(private service:Userprofileservice){}
  
    login():void{
      this.service.login(this.user).subscribe((data) =>{
        if(data){
          alert("Succesfully Login");
          this.user ={
            userName: '',
            email: '',
            password: '',
            profile:{
              age: 0,
              height: 0,
              weight: 0
      }

          }
          
        }else{
          alert("User is not Permitted")
          this.user ={
            userName: '',
            email: '',
            password: '',
            profile:{
              age: 0,
              height: 0,
              weight: 0
      }

          }
        }
     } )  

 
      

}
}
