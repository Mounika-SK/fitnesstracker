import { TestBed } from '@angular/core/testing';

import { Profile, User, Userprofileservice } from './userprofileservice';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Userprofileservice', () => {
  let service: Userprofileservice;
  let httpMock :HttpTestingController;

   const dummyprofile :Profile ={
     age: 22,
          height: 162,
          weight: 55

  }

   const dummyuser:User={
    
      
        userName: 'Mounika',
        email: 'mouni@gmail.com',
        password: '123',
        profile:{
          age: 22,
          height: 162,
          weight: 55
        
      }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule]
    });
    service = TestBed.inject(Userprofileservice);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should be PostUserMethod', () => {
    service.adduserandprofile(dummyuser).subscribe((res) =>{
      expect(res).toEqual(dummyuser);

    })
    let result = httpMock.expectOne("http://localhost:2001/api/users/register")
    expect(result.request.method).toBe("POST");
    result.flush(dummyuser);
    
  });


  
  it('should be getbyuserId method', () => {
    const userId =1;

    service.viewprofile(userId).subscribe((res) =>{
      expect(res).toEqual(dummyprofile);

    })
    let result = httpMock.expectOne(`http://localhost:2001/api/users/profile/${userId}`)
    expect(result.request.method).toBe("GET");
    result.flush(dummyprofile);
    
  });



});
