import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-preco-medicamento',
  templateUrl: './cadastro-preco-medicamento.component.html',
  styleUrls: ['./cadastro-preco-medicamento.component.css']
})
export class CadastroPrecoMedicamentoComponent implements OnInit {
  medicamentos = [];
  farmacias = [];
  mensagem: string;
  erro_editado: string;
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
  }

  cadastrarPrecoMedicamento(formCadastroPrecoMedicamento) {
    // tslint:disable-next-line: quotemark
    this.mensagem = "Processando, por favor aguarde...";
    this.erro_editado = '';
    this.httpClient.post('https://apibulafacil.azurewebsites.net//api//MedicamentoFarmacia',
      formCadastroPrecoMedicamento.value, { responseType: 'text' })
      .subscribe(
        data => {
          // tslint:disable-next-line: quotemark
          this.mensagem = "Preço cadastrado com sucesso.";
          formCadastroPrecoMedicamento.reset();
        },
        e => {
          this.mensagem = '';

          for (let i = 0; i < JSON.parse(e.error).length; i++) {
            if (JSON.parse(e.error)[i] != "") {
              this.erro_editado += JSON.parse(e.error)[i] + '\n';
            }
          }
        }
      );
  }

}
