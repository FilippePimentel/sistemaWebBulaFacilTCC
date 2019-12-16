import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-medicamento',
  templateUrl: './consulta-medicamento.component.html',
  styleUrls: ['./consulta-medicamento.component.css']
})
export class ConsultaMedicamentoComponent implements OnInit {
  medicamentos = [];
  medicamento = {};
  mensagem: string;
  erro_editado: string;
  @ViewChild('fechaModalVinculacao', {static: true}) fechaModalVinculacao: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Medicamento')
      .subscribe(
        (res: any[]) => {
          this.medicamentos = res;
        }
      );
  }

  obterMedicamento(idMedicamento) {
    this.erro_editado = '';
    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Medicamento//' + idMedicamento)
      .subscribe(
        (res: any) => {
          this.medicamento = res;
        }
      );
  }

  excluirMedicamento(idMedicamento) {
    this.mensagem = 'Processando, por favor aguarde...';
    this.httpClient.delete('https://apibulafacil.azurewebsites.net//api//Medicamento//' + idMedicamento,
      { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = 'Medicamento excluída com sucesso.';
          this.ngOnInit();
        },
        e => {
          this.mensagem = e.error;
        }
      );
  }

  atualizarMedicamento(formEdicao) {
    this.erro_editado = '';
    this.mensagem = 'Processando, por favor aguarde...';
    this.httpClient.put('https://apibulafacil.azurewebsites.net//api//Medicamento',
      formEdicao.value, { responseType: 'text' })
      .subscribe(
        data => {
          // tslint:disable-next-line: quotemark
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
