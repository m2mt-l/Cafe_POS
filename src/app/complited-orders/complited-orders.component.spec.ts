import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplitedOrdersComponent } from './complited-orders.component';

describe('ComplitedOrdersComponent', () => {
  let component: ComplitedOrdersComponent;
  let fixture: ComponentFixture<ComplitedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplitedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplitedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
