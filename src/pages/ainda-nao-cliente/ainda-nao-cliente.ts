import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ainda-nao-cliente',
  templateUrl: 'ainda-nao-cliente.html',
})
export class AindaNaoClientePage {

  nomeCliente = "";
  emailCliente = "";
  escolaCliente = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  enviarEmail(){

  }

  voltarLogin(){
    this.navCtrl.pop();
  }

}
