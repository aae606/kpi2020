import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptentableComponent } from './toptentable.component';

describe('ToptentableComponent', () => {
  let component: ToptentableComponent;
  let fixture: ComponentFixture<ToptentableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptentableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptentableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
