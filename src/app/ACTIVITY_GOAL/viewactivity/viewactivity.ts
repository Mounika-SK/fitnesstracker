import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity, Activityservice } from '../activityservice';

@Component({
  selector: 'app-viewactivity',
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './viewactivity.html',
  styleUrl: './viewactivity.css'
})
export class Viewactivity implements OnInit {
  ngOnInit(): void {
  
  }

  constructor(private service:Activityservice){}

  userId:number =0;

  activities:Activity[] =[];

  viewactivitiesbyid():void{
    this.service.viewactivity(this.userId).subscribe((data) => this.activities=data);
  }


}
