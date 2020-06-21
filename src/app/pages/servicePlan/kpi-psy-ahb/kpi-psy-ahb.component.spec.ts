import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiPsyAhbComponent } from './kpi-psy-ahb.component';

describe('KpiPsyAhbComponent', () => {
  let component: KpiPsyAhbComponent;
  let fixture: ComponentFixture<KpiPsyAhbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiPsyAhbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiPsyAhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
