import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginCorporativoPage } from '../pages/login-corporativo/login-corporativo';
import { LoginEscolarPage } from '../pages/login-escolar/login-escolar';
import { AindaNaoClientePage } from '../pages/ainda-nao-cliente/ainda-nao-cliente';
import { BlogPage } from '../pages/blog/blog';
import { AindaNaoClienteCorporativoPage } from '../pages/ainda-nao-cliente-corporativo/ainda-nao-cliente-corporativo';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { CardapioEscolarPage } from '../pages/cardapio-escolar/cardapio-escolar'; 
import { CardapioCorporativoPage } from '../pages/cardapio-corporativo/cardapio-corporativo';
import { FaleConoscoPage } from '../pages/fale-conosco/fale-conosco';

import { ServicosProvider } from '../providers/servicos/servicos';
import { AccordionComponent } from '../components/accordion/accordion';
import { CardapioLancheiraPage } from '../pages/cardapio-lancheira/cardapio-lancheira';
import { CardapioCantinaPage } from '../pages/cardapio-cantina/cardapio-cantina';
import { UltimosEventosPage } from '../pages/ultimos-eventos/ultimos-eventos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginCorporativoPage,
    LoginEscolarPage,
    LoginPage,
    AindaNaoClientePage,
    BlogPage,
    AindaNaoClienteCorporativoPage,
    CardapioPage,
    CardapioEscolarPage,
    CardapioCorporativoPage,
    FaleConoscoPage,
    AccordionComponent,
    CardapioLancheiraPage,
    CardapioCantinaPage,
    UltimosEventosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginCorporativoPage,
    LoginEscolarPage,
    LoginPage,
    AindaNaoClientePage,
    BlogPage,
    AindaNaoClienteCorporativoPage,
    CardapioPage,
    CardapioEscolarPage,
    CardapioCorporativoPage,
    FaleConoscoPage,
    CardapioLancheiraPage,
    CardapioCantinaPage,
    UltimosEventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicosProvider
  ]
})
export class AppModule {}
