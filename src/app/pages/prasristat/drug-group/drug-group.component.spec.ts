import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugGroupComponent } from './drug-group.component';

describe('DrugGroupComponent', () => {
  let component: DrugGroupComponent;
  let fixture: ComponentFixture<DrugGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
