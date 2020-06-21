import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiMddAhbComponent } from './kpi-mdd-ahb.component';

describe('KpiMddAhbComponent', () => {
  let component: KpiMddAhbComponent;
  let fixture: ComponentFixture<KpiMddAhbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiMddAhbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiMddAhbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
