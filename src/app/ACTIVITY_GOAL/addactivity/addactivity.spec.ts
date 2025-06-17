import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addactivity } from './addactivity';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Addactivity', () => {
  let component: Addactivity;
  let fixture: ComponentFixture<Addactivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addactivity,HttpClientTestingModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addactivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should binding input', async() => {
    let input = fixture.debugElement.query(By.css('input[name=steps]')).nativeElement
    input.value="22"
    input.dispatchEvent(new Event("input"))
    fixture.detectChanges();

    expect(component.activity.steps).toBe(22)
  });

  it('should create for ngsubmit', () => {
    spyOn(component,"addactivity")
    let form = fixture.debugElement.query(By.css('form'))
    form.triggerEventHandler("ngSubmit",null)
    expect(component.addactivity).toHaveBeenCalled();
  });
});
