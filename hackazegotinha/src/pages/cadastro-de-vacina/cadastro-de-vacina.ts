import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinalizacaoPage } from '../finalizacao/finalizacao';
import { CadastroDePacientePage } from '../cadastro-de-paciente/cadastro-de-paciente';
// import { CadastroDeVacinaPage } from '../cadastro-de-vacina/cadastro-de-vacina';
import { ScannerDeIdentidadePage } from '../scanner-de-identidade/scanner-de-identidade';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { LoginPage } from '../login/login';
import { ScannerDeVacinaPage } from '../scanner-de-vacina/scanner-de-vacina';

@Component({
  selector: 'page-cadastro-de-vacina',
  templateUrl: 'cadastro-de-vacina.html'
})
export class CadastroDeVacinaPage {

  constructor(public navCtrl: NavController) {
  }
  goToFinalizacao(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizacaoPage);
  }goToCadastroDePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDePacientePage);
  }goToCadastroDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeVacinaPage);
  }goToScannerDeIdentidade(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeIdentidadePage);
  }goToPaginaPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaPrincipalPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToScannerDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeVacinaPage);
  }
}
