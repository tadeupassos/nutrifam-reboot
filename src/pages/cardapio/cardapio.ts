import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { CardapioEscolarPage } from '../cardapio-escolar/cardapio-escolar';
import { CardapioLancheiraPage } from '../cardapio-lancheira/cardapio-lancheira';
import { CardapioCantinaPage } from '../cardapio-cantina/cardapio-cantina';
import { UltimosEventosPage } from '../ultimos-eventos/ultimos-eventos';

@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {

    this.menu.enable(true, 'menuApp');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  abrirCardapioSemana(){
    this.navCtrl.push(CardapioEscolarPage);
  }

  abrirCardapioLancheira(){
    this.navCtrl.push(CardapioLancheiraPage);
  }  

  abrirCardapioCantina(){
    this.navCtrl.push(CardapioCantinaPage);
  }

  abrirUltimosEventos(){
    this.navCtrl.push(UltimosEventosPage);
  }

}
