import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activityservice, Goal } from '../activityservice';

@Component({
  selector: 'app-addgoal',
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './addgoal.html',
  styleUrl: './addgoal.css'
})
export class Addgoal implements OnInit {
  ngOnInit(): void {
    
  }


  goal:Goal ={
    targetSteps: 0,
    targetCalories: 0
  }

  userId :number =0;
  
    constructor(private service:Activityservice){}
  
    addgoal():void{
      this.service.addgoal(this.userId,this.goal).subscribe();
      this.goal={
        targetSteps: 0,
    targetCalories: 0
        
  
      }
  
    }
  



}
