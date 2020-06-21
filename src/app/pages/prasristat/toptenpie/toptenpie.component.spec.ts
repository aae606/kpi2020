import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptenpieComponent } from './toptenpie.component';

describe('ToptenpieComponent', () => {
  let component: ToptenpieComponent;
  let fixture: ComponentFixture<ToptenpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptenpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptenpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
