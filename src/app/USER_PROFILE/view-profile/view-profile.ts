import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile, User, Userprofileservice } from '../userprofileservice';

@Component({
  selector: 'app-view-profile',
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-profile.html',
  styleUrl: './view-profile.css'
})
export class ViewProfile implements OnInit {

   ngOnInit(): void {

  
      
    }
  
    profile?:Profile

  

    searchId:number=0;
    selectedprofile?:Profile;

  
  
    constructor(private service:Userprofileservice){}


    profilebyuserid():void{
      this.service.viewprofile(this.searchId).subscribe((data) => this.profile=data)
      this.searchId=0;
    }

     editprofile(profileOne:Profile){
      this.selectedprofile ={...profileOne}

     }

     updateprofile():void{
      if(this.selectedprofile&&this.selectedprofile.id){
        this.service.updateprofile(this.selectedprofile.id,this.selectedprofile).subscribe((data) =>{
          alert(`${data.id} is updated`);
          this.selectedprofile=undefined;
        })
      }
     }

}
