import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiiAlcoholicComponent } from './kpii-alcoholic.component';

describe('KpiiAlcoholicComponent', () => {
  let component: KpiiAlcoholicComponent;
  let fixture: ComponentFixture<KpiiAlcoholicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiiAlcoholicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiiAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
