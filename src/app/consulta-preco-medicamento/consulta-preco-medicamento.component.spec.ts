import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPrecoMedicamentoComponent } from './consulta-preco-medicamento.component';

describe('ConsultaPrecoMedicamentoComponent', () => {
  let component: ConsultaPrecoMedicamentoComponent;
  let fixture: ComponentFixture<ConsultaPrecoMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPrecoMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPrecoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
