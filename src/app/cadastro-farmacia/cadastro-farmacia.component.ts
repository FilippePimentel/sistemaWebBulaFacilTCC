import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cadastro-farmacia',
  templateUrl: './cadastro-farmacia.component.html',
  styleUrls: ['./cadastro-farmacia.component.css']
})
export class CadastroFarmaciaComponent implements OnInit {
  mensagem: string;
  erro_editado: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  
  cadastrarFarmacia(formCadastro) {
    // tslint:disable-next-line: quotemark
    this.mensagem = "Processando, por favor aguarde...";
    this.erro_editado = '';
    formCadastro.value.Valido = 'N';
    this.httpClient.post('https://apibulafacil.azurewebsites.net//api//Farmacia',
      formCadastro.value, { responseType: 'text' })
      .subscribe(
        data => {
          // tslint:disable-next-line: quotemark
          this.mensagem = "Fármacia cadastrada com sucesso.";
          formCadastro.reset();
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

