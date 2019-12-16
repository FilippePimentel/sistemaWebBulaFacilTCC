import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-consulta-farmacia',
  templateUrl: './consulta-farmacia.component.html',
  styleUrls: ['./consulta-farmacia.component.css']
})
export class ConsultaFarmaciaComponent implements OnInit {

  farmacias = [];
  farmacia = {};
  mensagem: string;
  erro_editado: string;

  @ViewChild('fechaModalVinculacao', {static: true}) fechaModalVinculacao: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Farmacia')
      .subscribe(
        (res: any[]) => {
          this.farmacias = res;
        }
      );
  }

  obterFarmacia(idFarmacia) {
    this.erro_editado = '';
    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Farmacia//' + idFarmacia)
      .subscribe(
        (res: any) => {
          this.farmacia = res;
        }
      );
  }
  excluirFarmacia(idFarmacia) {
    this.mensagem = 'Processando, por favor aguarde...';
    this.httpClient.delete('https://apibulafacil.azurewebsites.net//api//Farmacia//' + idFarmacia,
      { responseType: 'text' })
      .subscribe(
        data => {
          this.mensagem = 'Farmácia excluída com sucesso.';
          this.ngOnInit();
        },
        e => {
          this.mensagem = e.error;
        }
      );
  }

  atualizarFarmacia(formEdicao) {
    this.erro_editado = '';
    this.mensagem = 'Processando, por favor aguarde...';
    formEdicao.value.Senha = 'aaaaaaa';
    this.httpClient.put('https://apibulafacil.azurewebsites.net//api//Farmacia',
      formEdicao.value, { responseType: 'text' })
      .subscribe(
        data => {
          // tslint:disable-next-line: quotemark
          this.mensagem = 'Farmácia editada com sucesso.';
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