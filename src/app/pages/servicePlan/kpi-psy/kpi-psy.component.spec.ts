import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiPsyComponent } from './kpi-psy.component';

describe('KpiPsyComponent', () => {
  let component: KpiPsyComponent;
  let fixture: ComponentFixture<KpiPsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiPsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiPsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
