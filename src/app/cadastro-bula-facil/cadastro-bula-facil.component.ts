import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-bula-facil',
  templateUrl: './cadastro-bula-facil.component.html',
  styleUrls: ['./cadastro-bula-facil.component.css']
})
export class CadastroBulaFacilComponent implements OnInit {
  posologiasTela = [];
  medicamentos = [];
  mensagem: string;
  erro_editado: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Posologia')
      .subscribe(
        (res: any[]) => {
          this.posologiasTela = res;
        });

    this.httpClient.get('https://apibulafacil.azurewebsites.net//api//Medicamento')
      .subscribe(
        (res: any[]) => {
          this.medicamentos = res;
        });
  }

  cadastrarBula(formCadastroBulaFacil) {
    // tslint:disable-next-line: quotemark
    this.mensagem = "Processando, por favor aguarde...";
    this.erro_editado = '';
    this.httpClient.post('https://apibulafacil.azurewebsites.net//api//BulaFacil',
    formCadastroBulaFacil.value, { responseType: 'text' })
      .subscribe(
        data => {
          // tslint:disable-next-line: quotemark
          this.mensagem = "Bula fácil cadastrada com sucesso.";
          formCadastroBulaFacil.reset();
        },
        e => {
          this.mensagem = '';

          for (let i = 0; i < JSON.parse(e.error).length; i++) {
            this.erro_editado += JSON.parse(e.error)[i] + '\n';
          }
        }
      );
  }

}
