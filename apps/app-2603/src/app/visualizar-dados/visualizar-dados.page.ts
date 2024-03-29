import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';
import { DadosFormulario } from '../models/dados-formulario.interface';

@Component({
  selector: 'app-visualizar-dados',
  templateUrl: './visualizar-dados.page.html',
  styleUrls: ['./visualizar-dados.page.scss'],
})
export class VisualizarDadosPage implements OnInit {

  dadosCadastrados: DadosFormulario[] = [];

  constructor(public dados : DadosService) { }

  ionViewWillEnter(){
    this.listarDados();   
  }  

  ngOnInit() {
  }

  listarDados(){
    this.dadosCadastrados = this.dados.visualizarDados();
  }

}
