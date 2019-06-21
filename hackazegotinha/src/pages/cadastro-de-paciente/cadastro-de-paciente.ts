import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeVacinaPage } from '../cadastro-de-vacina/cadastro-de-vacina';
import { FinalizacaoPage } from '../finalizacao/finalizacao';
// import { CadastroDePacientePage } from '../cadastro-de-paciente/cadastro-de-paciente';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { LoginPage } from '../login/login';
import { ScannerDeVacinaPage } from '../scanner-de-vacina/scanner-de-vacina';
import { ScannerDeIdentidadePage } from '../scanner-de-identidade/scanner-de-identidade';

@Component({
  selector: 'page-cadastro-de-paciente',
  templateUrl: 'cadastro-de-paciente.html'
})
export class CadastroDePacientePage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeVacinaPage);
  }goToFinalizacao(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizacaoPage);
  }goToCadastroDePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDePacientePage);
  }goToPaginaPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaPrincipalPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToScannerDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeVacinaPage);
  }goToScannerDeIdentidade(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeIdentidadePage);
  }
}
