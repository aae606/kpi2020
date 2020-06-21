import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiAsdComponent } from './kpi-asd.component';

describe('KpiAsdComponent', () => {
  let component: KpiAsdComponent;
  let fixture: ComponentFixture<KpiAsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiAsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiAsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
