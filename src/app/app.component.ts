import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { CardapioCorporativoPage } from '../pages/cardapio-corporativo/cardapio-corporativo';
import { BlogPage } from '../pages/blog/blog';
import { ServicosProvider } from '../providers/servicos/servicos';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  loader: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController, public serv: ServicosProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.presentLoading();
    
    this.serv.abrirNutrifam().then(() => {

      //this.serv.usuario.tipo_cliente = '';

      if (this.serv.usuario.tipo_cliente == 'PF'){
        this.serv.carregarCardapioSemana();
        this.serv.carregarCardapioLancheira();
        this.serv.carregarCardapioCantina();

        setTimeout(() => {
          this.rootPage = CardapioPage;
        }, 2000);
      }else if(this.serv.usuario.tipo_cliente == 'PJ'){
        this.serv.carregarCardapioCorporativo().then(() => {
          this.rootPage = CardapioCorporativoPage;
        });
      }else{
        this.rootPage = LoginPage;
      }

      this.loader.dismiss();
    });

  }

  presentLoading(){
    
    this.loader = this.loadingCtrl.create({
      content: "Por favor, aguarde...",
      duration: 1000
    });

    this.loader.present();
  }

  abrirBlog(){
    this.nav.push(BlogPage);
  }

  abrirFaleConosco(){
    this.nav.push(FaleConoscoPage);
  }

  Sair(){
    this.serv.destruirCredenciais();
    this.nav.setRoot(LoginPage);
  }  

}

