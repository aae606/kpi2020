import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasrihosComponent } from './prasrihos.component';

describe('PrasrihosComponent', () => {
  let component: PrasrihosComponent;
  let fixture: ComponentFixture<PrasrihosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrasrihosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasrihosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
