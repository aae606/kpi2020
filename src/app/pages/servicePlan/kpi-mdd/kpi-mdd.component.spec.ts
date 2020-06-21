import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiMddComponent } from './kpi-mdd.component';

describe('KpiMddComponent', () => {
  let component: KpiMddComponent;
  let fixture: ComponentFixture<KpiMddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiMddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiMddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
