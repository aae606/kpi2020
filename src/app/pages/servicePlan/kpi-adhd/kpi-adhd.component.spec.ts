import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiADHDComponent } from './kpi-adhd.component';

describe('KpiADHDComponent', () => {
  let component: KpiADHDComponent;
  let fixture: ComponentFixture<KpiADHDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiADHDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiADHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
