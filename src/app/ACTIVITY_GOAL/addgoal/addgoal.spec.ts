import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addgoal } from './addgoal';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('Addgoal', () => {
  let component: Addgoal;
  let fixture: ComponentFixture<Addgoal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addgoal,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addgoal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   
  it('should binding input', async() => {
    let input = fixture.debugElement.query(By.css('input[name=targetSteps]')).nativeElement
    input.value="22"
    input.dispatchEvent(new Event("input"))
    fixture.detectChanges();

    expect(component.goal.targetSteps).toBe(22)
  });

  it('should create for ngsubmit', () => {
    spyOn(component,"addgoal")
    let form = fixture.debugElement.query(By.css('form'))
    form.triggerEventHandler("ngSubmit",null)
    expect(component.addgoal).toHaveBeenCalled();
  });

});
