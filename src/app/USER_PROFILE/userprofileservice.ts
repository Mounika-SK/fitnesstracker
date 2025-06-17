import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Profile{
id?:number;
age:number;
height:number;
weight:number;

}

export interface  User{
  id?:number;
  userName:string;
  email:string;
  password:string;
  profile:Profile


}



@Injectable({
  providedIn: 'root'
})
export class Userprofileservice {

  constructor(private http:HttpClient) { }
  private baseUrl ="http://localhost:2001/api/users"

  adduserandprofile(user:User):Observable<User>{
    let result = this.http.post<User>(`${this.baseUrl}/register`,user)
    return result;
  }

  login(user:User):Observable<User>{
    let result =this.http.post<User>(`${this.baseUrl}/login`,user)
    return result;
  }

  updateprofile(id:number,profile:Profile):Observable<Profile>{
    return this.http.put<Profile>(`${this.baseUrl}/profile/${id}`,profile)

  }

  viewprofile(id:number):Observable<Profile>{
    return this.http.get<Profile>(`${this.baseUrl}/profile/${id}`)
  }



  }



