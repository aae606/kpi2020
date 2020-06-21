import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiMophComponent } from './kpi-moph.component';

describe('KpiMophComponent', () => {
  let component: KpiMophComponent;
  let fixture: ComponentFixture<KpiMophComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiMophComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiMophComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
