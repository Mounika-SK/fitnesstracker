import { TestBed } from '@angular/core/testing';


import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Activity, Activityservice, Goal } from './activityservice';



describe('Activityservice', () => {
  let service: Activityservice;
  let httpMock:HttpTestingController;

  const activity:Activity ={
      steps: 0,
      distance: 0,
      caloriesBurned: 0,
      userId: 0,
      
    }

    const goal:Goal ={
        targetSteps: 0,
        targetCalories: 0
      }
    
  const userId :number =0;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule]
    });
    service = TestBed.inject(Activityservice);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be Post Actvity Method', () => {
    service.aaddactivity(activity).subscribe((res) =>{
      expect(res).toEqual(activity);

    })
    let result = httpMock.expectOne("http://localhost:2002/api/activities")
    expect(result.request.method).toBe("POST");
    result.flush(activity);
    
  });


  
  it('should be getActivitiesbyuserId method', () => {

    const activities:Activity[]=[activity];

    service.viewactivity(userId).subscribe((res) =>{
      expect(res).toEqual(activities);

    })
    let result = httpMock.expectOne(`http://localhost:2002/api/user/${userId}`)
    expect(result.request.method).toBe("GET");
    result.flush(activities);
    
  });


  it('should be Post GoalMethod', () => {
    service.addgoal(userId,goal).subscribe((res) =>{
      expect(res).toEqual(goal);

    })
    let result = httpMock.expectOne(`http://localhost:2002/api/goals/${userId}`)
    expect(result.request.method).toBe("POST");
    result.flush(goal);
    
  });


  
  it('should be getGoals ByuserId method', () => {

    const goals:Goal[]=[goal];

    service.viewgoal(userId).subscribe((res) =>{
      expect(res).toEqual(goals);

    })
    let result = httpMock.expectOne(`http://localhost:2002/api/goals/user/${userId}`)
    expect(result.request.method).toBe("GET");
    result.flush(goals);
    
  });



});
