import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMedicamentoComponent } from './consulta-medicamento.component';

describe('ConsultaMedicamentoComponent', () => {
  let component: ConsultaMedicamentoComponent;
  let fixture: ComponentFixture<ConsultaMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
