import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-medicamento',
  templateUrl: './cadastro-medicamento.component.html',
  styleUrls: ['./cadastro-medicamento.component.css']
})
export class CadastroMedicamentoComponent implements OnInit {

  mensagem: string;
  erro_editado: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  cadastrarMedicamento(formCadastroMedicamento) {
    // tslint:disable-next-line: quotemark
    this.mensagem = "Processando, por favor aguarde...";
    this.erro_editado = '';
    this.httpClient.post('https://apibulafacil.azurewebsites.net//api//Medicamento',
    formCadastroMedicamento.value, { responseType: 'text' })
      .subscribe(
        data => {
          // tslint:disable-next-line: quotemark
          this.mensagem = "Medicamento cadastrada com sucesso.";
          formCadastroMedicamento.reset();
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
