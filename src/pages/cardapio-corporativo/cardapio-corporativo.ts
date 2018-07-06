import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Slides } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-cardapio-corporativo',
  templateUrl: 'cardapio-corporativo.html',
})
export class CardapioCorporativoPage {

  @ViewChild(Slides) slides: Slides; 

  segunda: any[] = [];
  terca: any[] = [];
  quarta: any[] = [];
  quinta: any[] = [];
  sexta: any[] = [];  

  dataSegunda: string = "";
  dataTerca: string = "";
  dataQuarta: string = "";
  dataQuinta: string = "";
  dataSexta: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, public serv: ServicosProvider) {

    this.menu.enable(true, 'menuApp');

    this.segunda = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'segunda';
    });
    this.dataSegunda = this.segunda[0].dataDiaSemana;
    this.dataSegunda = this.dataSegunda.replace('-','/').substr(0,5);

    this.terca = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'terca';
    });
    this.dataTerca = this.terca[0].dataDiaSemana;
    this.dataTerca = this.dataTerca.replace('-','/').substr(0,5);

    this.quarta = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'quarta';
    });
    this.dataQuarta = this.quarta[0].dataDiaSemana;    
    this.dataQuarta = this.dataQuarta.replace('-','/').substr(0,5);

    this.quinta = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'quinta';
    });
    this.dataQuinta = this.quinta[0].dataDiaSemana;    
    this.dataQuinta = this.dataQuinta.replace('-','/').substr(0,5);

    this.sexta = this.serv.cardapioSemana.filter((dia) => {
      return dia.diaSemana == 'sexta';
    });  
    this.dataSexta = this.sexta[0].dataDiaSemana;    
    this.dataSexta = this.dataSexta.replace('-','/').substr(0,5);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioCorporativoPage');
  }

  ionViewWillEnter(){
    let hoje = new Date().getDay();
    this.slides.slideTo(hoje);
  }

  proximoDia(){
    this.slides.slideNext();
  }

  diaAnterior(){
    this.slides.slidePrev();
  }

}
