import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUser } from './add-user';
import { By } from '@angular/platform-browser';

describe('AddUser', () => {
  let component: AddUser;
  let fixture: ComponentFixture<AddUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should binding input', async() => {
    let input = fixture.debugElement.query(By.css('input[name=email]')).nativeElement
    input.value="mouni@gmail.com"
    input.dispacthEvent(new Event("input"))
    fixture.detectChanges();

    expect(component.user.email).toBe("mouni@gmail.com")
  });

  it('should create for ngsubmit', () => {
    spyOn(component,"addUserandprofile")
    let form = fixture.debugElement.query(By.css('form'))
    form.triggerEventHandler("ngSubmit",null)
    expect(component.addUserandprofile).toHaveBeenCalled();
  });




  
});
