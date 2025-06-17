import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewactivity } from './viewactivity';
import { By } from '@angular/platform-browser';

describe('Viewactivity', () => {
  let component: Viewactivity;
  let fixture: ComponentFixture<Viewactivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewactivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewactivity);
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
    spyOn(component,"viewactivitiesbyid")
    let form = fixture.debugElement.query(By.css('button'))
    form.triggerEventHandler("click",null)
    expect(component.viewactivitiesbyid).toHaveBeenCalled();
  });

});
