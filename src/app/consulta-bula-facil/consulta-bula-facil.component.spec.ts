import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBulaFacilComponent } from './consulta-bula-facil.component';

describe('ConsultaBulaFacilComponent', () => {
  let component: ConsultaBulaFacilComponent;
  let fixture: ComponentFixture<ConsultaBulaFacilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaBulaFacilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaBulaFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
