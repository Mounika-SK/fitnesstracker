import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activityservice, Goal } from '../activityservice';

@Component({
  selector: 'app-viewgoal',
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './viewgoal.html',
  styleUrl: './viewgoal.css'
})
export class Viewgoal implements OnInit {
  ngOnInit(): void {
    
  }

  constructor (private service:Activityservice){}

  userId:number=0;

  goals:Goal[]=[];

  viewgoals():void{
    this.service.viewgoal(this.userId).subscribe((data) =>this.goals=data
    )
  }

}
