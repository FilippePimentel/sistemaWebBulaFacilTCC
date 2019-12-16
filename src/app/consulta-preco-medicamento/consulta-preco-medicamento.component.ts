import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-preco-medicamento',
  templateUrl: './consulta-preco-medicamento.component.html',
  styleUrls: ['./consulta-preco-medicamento.component.css']
})
export class ConsultaPrecoMedicamentoComponent implements OnInit {
  Farmacia = {};
  precos = [];
  preco = {};
  mensagem: string;
  erro_editado: string;
  medicamentos = [];
  farmacias = [];

  @ViewChild('fechaModalVinculacao', { static: true }) fechaModalVinculacao: ElementRef;

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Medicamento')
      .subscribe(
        (res: any[]) => {
          this.medicamentos = res;
        });

    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Farmacia')
      .subscribe(
        (res: any[]) => {
          this.farmacias = res;
        });

    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//MedicamentoFarmacia')
      .subscribe(
        (res: any[]) => {
          this.precos = res;
        }
      );
  }

  obterPreco(IdMedicamentoFarmacia) {
    this.erro_editado = '';
    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//MedicamentoFarmacia//' + IdMedicamentoFarmacia)
      .subscribe(
        (res: any) => {
          this.preco = res;
        }
      );
  }

  excluirPreco(IdMedicamentoFarmacia) {
    this.mensagem = 'Processando, por favor aguarde...';
    this.httpClient.delete('https://apibulafacil.azurewebsites.net//api//MedicamentoFarmacia//' + IdMedicamentoFarmacia,
      { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = 'Preço excluído com sucesso.';
          this.ngOnInit();
        },
        e => {
          this.mensagem = e.error;
        }
      );
  }
  atualizarPreco(formEdicao) {

    this.erro_editado = '';
    this.mensagem = 'Processando, por favor aguarde...';
    this.httpClient.put('https://apibulafacil.azurewebsites.net//api//MedicamentoFarmacia',
      formEdicao.value, { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = 'Medicamento editado com sucesso.';
          formEdicao.reset();
          this.fechaModalVinculacao.nativeElement.click();
          this.ngOnInit();
        },
        e => {
          this.mensagem = '';
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < JSON.parse(e.error).length; i++) {
            this.erro_editado += JSON.parse(e.error)[i] + '\n';
          }
        }
      );
  }
}
