import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ultimos-eventos',
  templateUrl: 'ultimos-eventos.html',
})
export class UltimosEventosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UltimosEventosPage');
  }

}
