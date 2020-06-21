import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiiAutismComponent } from './kpii-autism.component';

describe('KpiiAutismComponent', () => {
  let component: KpiiAutismComponent;
  let fixture: ComponentFixture<KpiiAutismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiiAutismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiiAutismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
