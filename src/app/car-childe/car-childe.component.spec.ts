import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarChildeComponent } from './car-childe.component';

describe('CarChildeComponent', () => {
  let component: CarChildeComponent;
  let fixture: ComponentFixture<CarChildeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarChildeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarChildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
