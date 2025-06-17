import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewgoal } from './viewgoal';
import { By } from '@angular/platform-browser';

describe('Viewgoal', () => {
  let component: Viewgoal;
  let fixture: ComponentFixture<Viewgoal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewgoal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewgoal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should binding input', async() => {
    let input = fixture.debugElement.query(By.css('input[name=userId]')).nativeElement
    input.value="1"
    input.dispatchEvent(new Event("input"))
    fixture.detectChanges();

    expect(component.userId).toBe(1)
  });

  it('should create for ngsubmit', () => {
    spyOn(component,"viewgoals")
    let form = fixture.debugElement.query(By.css('button'))
    form.triggerEventHandler("click",null)
    expect(component.viewgoals).toHaveBeenCalled();
  });
});
