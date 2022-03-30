import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFatherComponent } from './car-father.component';

describe('CarFatherComponent', () => {
  let component: CarFatherComponent;
  let fixture: ComponentFixture<CarFatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
