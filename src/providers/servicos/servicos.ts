import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicosProvider {

  public qry = 'http://tadeupassos.xyz/nutrifam/querys/';

  public cardapioSemana: any[] = [];
  public cardapioLancheira: any[] = [];
  public cardapioCantina: any[]= [];

  usuario = {
    nome: '',
    codigo: '',
    tipo_cliente: '',
    tipo_cardapio: '0'
  };

  constructor(public http: Http) {
    console.log('Hello ServicosProvider Provider');
  }

  abrirNutrifam(){

    return new Promise((resolve, reject) => {

      console.log("abrir app codigo: " + window.localStorage.getItem('codigo'));

      if (window.localStorage.getItem('codigo') == "undefined" || window.localStorage.getItem('codigo') == null){
        reject();
      }
      else {
        this.carregarCredenciais();
        resolve();
      }
    });

  }

  armazenarCredenciais(usuario) {
    window.localStorage.setItem('nome', usuario.nome);
    window.localStorage.setItem('codigo', usuario.codigo);
    window.localStorage.setItem('tipo_cliente', usuario.tipo_cliente);
    window.localStorage.setItem('tipo_cardapio', usuario.tipo_cardapio);

    console.log("armazena codigo: " + usuario.codigo);
  }

  carregarCredenciais() {
    this.usuario.nome = window.localStorage.getItem('nome');
    this.usuario.codigo = window.localStorage.getItem('codigo');
    this.usuario.tipo_cliente = window.localStorage.getItem('tipo_cliente');
    this.usuario.tipo_cardapio = window.localStorage.getItem('tipo_cardapio');

    console.log("resgata tipo_cliente: " + window.localStorage.getItem('tipo_cliente'));
  }

  destruirCredenciais() {
    this.usuario.nome = '';
    this.usuario.codigo = '';
    this.usuario.tipo_cliente = '';
    this.usuario.tipo_cardapio = '0';
    window.localStorage.clear();
  }  

  carregarCardapioSemana(){

    this.cardapioSemana = [];

    let codigoEmpresa = 13; //this.usuario.codigoEmpresa;
    let semana = 21;  
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapioSemana.php",{
      'tipo_cardapio' : 4,
      'empresa' : codigoEmpresa,
      'semana' : semana
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      for (let i = 0; i < data.length; i++){

        this.cardapioSemana.push({
          tipoCardapio: data[i].tipoCardapio,
          nomeEmpresa: data[i].nome,
          numSemana: data[i].num_semana,
          dataSemana: data[i].data_semana,
          diaSemana: data[i].dia_semana,
          dataDiaSemana: data[i].data_dia_semana,
          item: data[i].item,
          corItem: data[i].cor_item,
          conteudo: data[i].conteudo,
          obsDia: data[i].obs 
        });
      }

      //console.log("cardapios: " + JSON.stringify(this.cardapioSemana));
      
    }, err => console.log('Deu erro carregarCardapioSemana(): ' + err));
  }

  carregarCardapioLancheira(){
    
    this.cardapioSemana = [];

    let codigoEmpresa = 13; //this.usuario.codigoEmpresa;
    let semana = 21;  
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapioLancheira.php",{
      'tipo_cardapio' : 1,
      'empresa' : codigoEmpresa,
      'semana' : semana
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      for (let i = 0; i < data.length; i++){

        this.cardapioLancheira.push({
          tipoCardapio: data[i].tipoCardapio,
          nomeEmpresa: data[i].nome,
          numSemana: data[i].num_semana,
          dataSemana: data[i].data_semana,
          diaSemana: data[i].dia_semana,
          dataDiaSemana: data[i].data_dia_semana,
          item: data[i].item,
          corItem: data[i].cor_item,
          conteudo: data[i].conteudo,
          obsDia: data[i].obs 
        });
      }

      //console.log("cardapios: " + JSON.stringify(this.cardapioSemana));
      
    }, err => console.log('Deu erro carregarCardapioLancheira(): ' + err));
  }  

  carregarCardapioCantina(){
    
    this.cardapioCantina = [];
    let cantina: any[] = []

    let codigoEmpresa = 13; //this.usuario.codigoEmpresa;
    
    let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
    let localiza = this.http.post(this.qry + "carregarCardapioCantina.php",{
      'tipo_cardapio' : 5,
      'empresa' : codigoEmpresa
    },{
      headers:headers,
      method: 'POST'
    }).map(res => res.json()).subscribe(data => {

      let comida: any;

      for (let i = 0; i < data.length; i++){

        cantina.push({
          item: data[i].item,
          corItem: data[i].cor_item,
          conteudo: data[i].conteudo,
          preco: data[i].preco,
          obsDia: data[i].obs 
        });


        if(comida != data[i].item){

          this.cardapioCantina.push({
            nomeEmpresa: data[i].nome,
            item: data[i].item,
            dados: [],
            corItem: data[i].cor_item
          });

          comida = data[i].item;
        }
      }

      //console.log("todos os itens com precos " + JSON.stringify(cantina))

      //console.log("2 itens " + JSON.stringify(this.cardapioCantina))

      for (let i = 0; i <  this.cardapioCantina.length; i++){

        this.cardapioCantina[i].dados = cantina.filter((item) => {
          return item.item == this.cardapioCantina[i].item;
        });

      }

      //console.log("2 itens e dados " + JSON.stringify(this.cardapioCantina))
      
    }, err => console.log('Deu erro carregarCardapioCantina(): ' + err));
  }

  carregarCardapioCorporativo(){

    this.cardapioSemana = [];

    return new Promise((resolve, reject) => {
    
      let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
      this.http.post(this.qry + "carregarCardapioCorporativo.php",{
        'tipo_cardapio' : this.usuario.tipo_cardapio
      },{
        headers:headers,
        method: 'POST'
      }).map(res => res.json()).subscribe(data => {

        for (let i = 0; i < data.length; i++){
          this.cardapioSemana.push({
            tipoCardapio: data[i].tipoCardapio,
            nomeEmpresa: data[i].nome,
            numSemana: data[i].num_semana,
            dataSemana: data[i].data_semana,
            diaSemana: data[i].dia_semana,
            dataDiaSemana: data[i].data_dia_semana,
            item: data[i].item,
            corItem: data[i].cor_item,
            conteudo: data[i].conteudo,
            obsDia: data[i].obs 
          });
          resolve();
        }
      }, err => {
        console.log('Deu erro carregarCardapioSemana(): ' + err);
        reject();
      });
    });
  }

  logar(codigo){

    return new Promise((resolve, reject) => {

      let headers = new Headers({ 'Content-Type' : 'application/x-www-form-urlencoded' });
      this.http.post(this.qry + "verificarLogin.php",{
        'codigo' : codigo
      },{
        headers:headers,
        method: 'POST'
      }).map(res => res.json()).subscribe(data => {

        if(data){

          this.usuario.nome = data[0].nome;
          this.usuario.codigo = codigo;
          this.usuario.tipo_cliente = data[0].tipo;
          this.usuario.tipo_cardapio = data[0].tipo_cardapio_id;

          this.armazenarCredenciais(this.usuario);
          resolve(true);
        }else{
          reject(false);
        }

      }, err => console.log('Deu erro  logar(codigo): ' + err));  
    });

  }
}
