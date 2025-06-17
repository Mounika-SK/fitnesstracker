import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userms } from './userms';

describe('Userms', () => {
  let component: Userms;
  let fixture: ComponentFixture<Userms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
