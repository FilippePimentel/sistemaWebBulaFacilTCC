import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPrecoMedicamentoComponent } from './cadastro-preco-medicamento.component';

describe('CadastroPrecoMedicamentoComponent', () => {
  let component: CadastroPrecoMedicamentoComponent;
  let fixture: ComponentFixture<CadastroPrecoMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPrecoMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPrecoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
