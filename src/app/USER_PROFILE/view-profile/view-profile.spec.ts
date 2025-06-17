import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfile } from './view-profile';
import { By } from '@angular/platform-browser';

describe('ViewProfile', () => {
  let component: ViewProfile;
  let fixture: ComponentFixture<ViewProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should binding input', async() => {
    let input = fixture.debugElement.query(By.css('input[name=searchId]')).nativeElement
    input.value="1"
    input.dispatchEvent(new Event("input"))
    fixture.detectChanges();

    expect(component.searchId).toBe(1)
  });

  it('should create for ngsubmit', () => {
    spyOn(component,"profilebyuserid")
    let form = fixture.debugElement.query(By.css('button'))
    form.triggerEventHandler("click",null)
    expect(component.profilebyuserid).toHaveBeenCalled();
  });

});
