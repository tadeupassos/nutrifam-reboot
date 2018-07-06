import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-cardapio-cantina',
  templateUrl: 'cardapio-cantina.html',
})
export class CardapioCantinaPage {

  cantina: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, private menu: MenuController) {

    this.menu.enable(true, 'menuApp');

    this.cantina = this.serv.cardapioCantina;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioCantinaPage');
  }

}
