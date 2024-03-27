import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-visualizar-dados',
  templateUrl: './visualizar-dados.page.html',
  styleUrls: ['./visualizar-dados.page.scss'],
})
export class VisualizarDadosPage implements OnInit {


  dadosCadastrados : any[];

  constructor(public dados : DadosService) { }

  ionViewWillEnter(){
    this.listarDados();   
  }  

  ngOnInit() {
  }

  listarDados(){
    
    this.dadosCadastrados = this.dados.visualizarDados();
    console.log("dados visualizar: "+this.dadosCadastrados)
  }





}
