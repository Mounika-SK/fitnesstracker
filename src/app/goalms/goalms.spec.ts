import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goalms } from './goalms';

describe('Goalms', () => {
  let component: Goalms;
  let fixture: ComponentFixture<Goalms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goalms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goalms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
