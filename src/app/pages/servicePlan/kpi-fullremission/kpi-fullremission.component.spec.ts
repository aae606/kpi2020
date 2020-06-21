import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiFullremissionComponent } from './kpi-fullremission.component';

describe('KpiFullremissionComponent', () => {
  let component: KpiFullremissionComponent;
  let fixture: ComponentFixture<KpiFullremissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiFullremissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiFullremissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
