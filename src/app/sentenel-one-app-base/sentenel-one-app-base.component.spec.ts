import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenelOneAppBaseComponent } from './sentenel-one-app-base.component';

describe('SentenelOneAppBaseComponent', () => {
  let component: SentenelOneAppBaseComponent;
  let fixture: ComponentFixture<SentenelOneAppBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenelOneAppBaseComponent]
    });
    fixture = TestBed.createComponent(SentenelOneAppBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
