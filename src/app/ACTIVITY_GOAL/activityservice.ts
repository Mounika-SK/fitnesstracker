import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Activity{
  id?:number
  steps:number
  distance:number
  caloriesBurned:number
  userId:number
  date?:Date

} 

export interface Goal {
  id?:number;
  targetSteps:number;
  targetCalories:number;


}

@Injectable({
  providedIn: 'root'
})
export class Activityservice {

  constructor(private http:HttpClient) { }

  private baseUrl ="http://localhost:2002/api"

   aaddactivity(activity:Activity):Observable<Activity>{
       let result = this.http.post<Activity>(`${this.baseUrl}/activities`,activity)
       return result;
     }
   
     viewactivity(id:number):Observable<Activity[]>{
       return this.http.get<Activity[]>(`${this.baseUrl}/user/${id}`)

     }

     addgoal(id:number,goal:Goal):Observable<Goal>{
      let result = this.http.post<Goal>(`${this.baseUrl}/goals/${id}`,goal)
       return result;

     }

     viewgoal(id:number):Observable<Goal[]>{
       return this.http.get<Goal[]>(`${this.baseUrl}/goals/user/${id}`)

     }
   
   

}
