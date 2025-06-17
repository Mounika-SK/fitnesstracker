import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity, Activityservice, Goal } from '../activityservice';

@Component({
  selector: 'app-addactivity',
  imports: [HttpClientJsonpModule,FormsModule,CommonModule],
  templateUrl: './addactivity.html',
  styleUrl: './addactivity.css'
})
export class Addactivity  implements OnInit{


  ngOnInit(): void {
   
  }

  activity:Activity ={
    steps: 0,
    distance: 0,
    caloriesBurned: 0,
    userId: 0,
    
  }

  constructor(private service:Activityservice){}

  addactivity():void{
    this.service.aaddactivity(this.activity).subscribe();
    this.activity={
      steps: 0,
    distance: 0,
    caloriesBurned: 0,
    userId: 0,

    }

  }

  

}
