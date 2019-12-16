import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-bula-facil',
  templateUrl: './consulta-bula-facil.component.html',
  styleUrls: ['./consulta-bula-facil.component.css']
})
export class ConsultaBulaFacilComponent implements OnInit {
  medicamentos = [];
  bulas = [];
  bula = {};
  mensagem: string;
  erro_editado: string;
  Valido: string;
  @ViewChild('fechaModalVinculacao', { static: true }) fechaModalVinculacao: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.mensagem = '';
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//BulaFacil')
      .subscribe(
        (res: any[]) => {
          this.bulas = res;
        }
      );

    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Medicamento')
      .subscribe(
        (res: any[]) => {
          this.medicamentos = res;
        }
      );
  }

obterBula(idBulaFacil) {
  this.erro_editado = '';
  this.mensagem = '';
  this.httpClient.get('https://apibulafacil.azurewebsites.net//api//BulaFacil//' + idBulaFacil)
    .subscribe(
      (res: any) => {
        this.bula = res;
      }
    );
}

excluirBula(idBulaFacil) {
  this.mensagem = 'Processando, por favor aguarde...';
  this.httpClient.delete('https://apibulafacil.azurewebsites.net//api//BulaFacil//' + idBulaFacil,
    { responseType: 'text' })
    .subscribe(
      data => {
        this.mensagem = 'Bula excluída com sucesso.';
        this.ngOnInit();
      },
      e => {
        this.mensagem = e.error;
      }
    );
}

atualizarBula(formEdicao) {
  this.erro_editado = '';
  formEdicao.value.Valido = 'S';
  this.mensagem = 'Processando, por favor aguarde...';
  this.httpClient.put('https://apibulafacil.azurewebsites.net//api//BulaFacil',
    formEdicao.value, { responseType: 'text' })
    .subscribe(
      data => {
        // tslint:disable-next-line: quotemark
        this.mensagem = 'Bula editada com sucesso.';
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
