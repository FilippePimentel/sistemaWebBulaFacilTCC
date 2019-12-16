import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFarmaciaComponent } from './consulta-farmacia.component';

describe('ConsultaFarmaciaComponent', () => {
  let component: ConsultaFarmaciaComponent;
  let fixture: ComponentFixture<ConsultaFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaFarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
