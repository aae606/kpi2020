import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpimophComponent } from './kpimoph.component';

describe('KpimophComponent', () => {
  let component: KpimophComponent;
  let fixture: ComponentFixture<KpimophComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpimophComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpimophComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
