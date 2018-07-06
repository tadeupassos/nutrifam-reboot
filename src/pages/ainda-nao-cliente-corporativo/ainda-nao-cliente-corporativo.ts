import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ainda-nao-cliente-corporativo',
  templateUrl: 'ainda-nao-cliente-corporativo.html',
})
export class AindaNaoClienteCorporativoPage {

  nomeEmpresa = "";
  funcionario = "";
  periodo = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  enviarEmail(){

  }

  voltarLogin(){
    this.navCtrl.pop();
  }

}
