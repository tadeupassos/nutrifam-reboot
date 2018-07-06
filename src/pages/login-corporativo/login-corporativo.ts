import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import { CardapioCorporativoPage } from '../cardapio-corporativo/cardapio-corporativo';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { AindaNaoClienteCorporativoPage } from '../ainda-nao-cliente-corporativo/ainda-nao-cliente-corporativo';

@Component({
  selector: 'page-login-corporativo',
  templateUrl: 'login-corporativo.html',
})
export class LoginCorporativoPage {

  numeroCadastro = "";
  cadastrado = true;
  camposVazios = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, public loadingCtrl: LoadingController, private menu: MenuController) {

    this.menu.enable(false, 'menuApp');

  }

  logarNumero(){

    if(this.numeroCadastro.length == 0){
      this.camposVazios = true;
    }else{
      this.presentLoading();

      this.serv.logar(this.numeroCadastro).then((logado) => {

        if(logado){
          this.serv.carregarCardapioCorporativo().then(() => {
            this.navCtrl.setRoot(CardapioCorporativoPage);
          });
        }else{
          this.cadastrado = false;
        }
      });
    }
  }

  presentLoading(){
    
    let loader = this.loadingCtrl.create({
       content: "Por favor, aguarde...",
       duration: 2000
     });
 
     loader.present();
   } 

  abrirNaoCliente(){
    this.navCtrl.push(AindaNaoClienteCorporativoPage);
  }

  numero(){
    if(isNaN(parseInt(this.numeroCadastro)) || this.numeroCadastro.substr(-1) == "." || this.numeroCadastro.substr(-1) == " "){
      this.numeroCadastro = this.numeroCadastro.slice(0,-1);
    }
  }

  voltarLogin(){
    this.navCtrl.pop();
  } 

}
