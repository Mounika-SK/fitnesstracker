import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, Userprofileservice } from '../userprofileservice';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser implements OnInit {
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

  addUserandprofile():void{
    this.service.adduserandprofile(this.user).subscribe();
    this.user={
  
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


}
