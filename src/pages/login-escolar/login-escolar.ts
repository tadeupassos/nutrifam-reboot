import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { AindaNaoClientePage } from '../ainda-nao-cliente/ainda-nao-cliente';
import { CardapioPage } from '../cardapio/cardapio';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-login-escolar',
  templateUrl: 'login-escolar.html',
})
export class LoginEscolarPage {

  cpf = "";
  cadastrado = true;
  camposVazios = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, public loadingCtrl: LoadingController, private menu: MenuController) {

    this.menu.enable(false, 'menuApp');

  }

  logarCPF(){
    if(this.cpf.length == 0){
      this.camposVazios = true;
    }else{
      this.presentLoading();

        if(this.serv.logar(this.cpf)){
          this.serv.carregarCardapioSemana();
          this.serv.carregarCardapioLancheira();
          this.serv.carregarCardapioCantina();
          setTimeout(() => {
            this.navCtrl.setRoot(CardapioPage);
          },2000);
        }else{
          this.cadastrado = false;
        }

    }
  }
  
  presentLoading(){
    
   let loader = this.loadingCtrl.create({
      content: "Por favor, aguarde...",
      duration: 1500
    });

    loader.present();
  }    

  abrirNaoCliente(){
    this.navCtrl.push(AindaNaoClientePage);
  }

  numero(){
    if(isNaN(parseInt(this.cpf)) || this.cpf.substr(-1) == "." || this.cpf.substr(-1) == " "){
      this.cpf = this.cpf.slice(0,-1);
    }
  }

  voltarLogin(){
    this.navCtrl.pop();
  }  

}
