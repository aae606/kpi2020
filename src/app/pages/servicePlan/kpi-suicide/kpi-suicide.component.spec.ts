import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSuicideComponent } from './kpi-suicide.component';

describe('KpiSuicideComponent', () => {
  let component: KpiSuicideComponent;
  let fixture: ComponentFixture<KpiSuicideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiSuicideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiSuicideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
