import { Component, OnInit } from '@angular/core';
import { dadosForm } from '../models/dadosForm';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.page.html',
  styleUrls: ['./listar-dados.page.scss'],
})
export class ListarDadosPage implements OnInit {


  dadosTela : dadosForm[]=[];
  pos : number = 0;


  constructor(public servico : DadosService,
              public rota : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.dadosTela = this.servico.listarDados();

  }

  public visualizarDadosObj(obj : dadosForm){

    this.pos = this.servico.encontrarPosicaoObj(obj);
    //console.log("Pos: "+this.pos);
    this.rota.navigate(['visualizar-dados-objeto/'+this.pos])

  }


}
