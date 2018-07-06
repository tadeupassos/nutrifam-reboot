import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Slides } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-cardapio-escolar',
  templateUrl: 'cardapio-escolar.html',
})
export class CardapioEscolarPage {

  @ViewChild(Slides) slides: Slides; 

  segunda: any[] = [];
  terca: any[] = [];
  quarta: any[] = [];
  quinta: any[] = [];
  sexta: any[] = [];         

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public serv: ServicosProvider) {

    this.menu.enable(true, 'menuApp');

    this.segunda = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'segunda';
    });

    this.terca = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'terca';
    });

    this.quarta = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'quarta';
    });
    
    this.quinta = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'quinta';
    });
    
    this.sexta = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'sexta';
    });    

  }

  ionViewDidLoad() {
   // console.log("segunda " + this.segunda)
  }

  proximoDia(){
    this.slides.slideNext();
  }

  diaAnterior(){
    this.slides.slidePrev();
  }

}
