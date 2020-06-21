import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MddGroupComponent } from './mdd-group.component';

describe('MddGroupComponent', () => {
  let component: MddGroupComponent;
  let fixture: ComponentFixture<MddGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MddGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
