import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Slides} from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-cardapio-lancheira',
  templateUrl: 'cardapio-lancheira.html',
})
export class CardapioLancheiraPage {

  @ViewChild(Slides) slides: Slides; 
  
  segunda: any[] = [];
  terca: any[] = [];
  quarta: any[] = [];
  quinta: any[] = [];
  sexta: any[] = [];  

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public serv: ServicosProvider) {

    this.menu.enable(true, 'menuApp');

    this.segunda = this.serv.cardapioLancheira.filter((dia) => {
      return dia.diaSemana == 'segunda';
    });

    this.terca = this.serv.cardapioLancheira.filter((dia) => {
      return dia.diaSemana == 'terca';
    });

    this.quarta = this.serv.cardapioLancheira.filter((dia) => {
      return dia.diaSemana == 'quarta';
    });
    
    this.quinta = this.serv.cardapioLancheira.filter((dia) => {
      return dia.diaSemana == 'quinta';
    });
    
    this.sexta = this.serv.cardapioLancheira.filter((dia) => {
      return dia.diaSemana == 'sexta';
    });  

  }

  ionViewDidLoad() {
    console.log("segunda " + this.segunda)
  }  

  proximoDia(){
    this.slides.slideNext();
  }

  diaAnterior(){
    this.slides.slidePrev();
  }  

}
