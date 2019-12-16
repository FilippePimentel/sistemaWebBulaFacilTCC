import { NgxCurrencyModule } from 'ngx-currency';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroFarmaciaComponent } from './cadastro-farmacia/cadastro-farmacia.component';
import { ConsultaFarmaciaComponent } from './consulta-farmacia/consulta-farmacia.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { CadastroMedicamentoComponent } from './cadastro-medicamento/cadastro-medicamento.component';
import { ConsultaMedicamentoComponent } from './consulta-medicamento/consulta-medicamento.component';
import { CadastroPrecoMedicamentoComponent } from './cadastro-preco-medicamento/cadastro-preco-medicamento.component';
import { ConsultaPrecoMedicamentoComponent } from './consulta-preco-medicamento/consulta-preco-medicamento.component';
import { CadastroBulaFacilComponent } from './cadastro-bula-facil/cadastro-bula-facil.component';
import { ConsultaBulaFacilComponent } from './consulta-bula-facil/consulta-bula-facil.component';

const appRoutes: Routes = [
  { path: 'cadastroFarmacia', component: CadastroFarmaciaComponent },
  { path: 'consultaFarmacia', component: ConsultaFarmaciaComponent },
  { path: 'cadastroMedicamento', component: CadastroMedicamentoComponent },
  { path: 'consultaMedicamento', component: ConsultaMedicamentoComponent },
  { path: 'cadastroPrecoMedicamento', component: CadastroPrecoMedicamentoComponent },
  { path: 'consultaPrecoMedicamento', component: ConsultaPrecoMedicamentoComponent },
  { path: 'CadastroBulaFacil', component: CadastroBulaFacilComponent },
  { path: 'ConsultaBulaFacil', component: ConsultaBulaFacilComponent }
 ]

@NgModule({
  declarations: [
    AppComponent,
    CadastroFarmaciaComponent,
    ConsultaFarmaciaComponent,
    CadastroMedicamentoComponent,
    ConsultaMedicamentoComponent,
    CadastroPrecoMedicamentoComponent,
    ConsultaPrecoMedicamentoComponent,
    CadastroBulaFacilComponent,
    ConsultaBulaFacilComponent
    ],
  imports: [
    BrowserModule,
    //registrando a variavel de mapeamento de rotas
    RouterModule.forRoot(appRoutes),
    NgxCurrencyModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
