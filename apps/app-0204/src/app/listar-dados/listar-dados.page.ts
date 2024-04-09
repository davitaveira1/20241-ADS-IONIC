import { Component, OnInit } from '@angular/core';
import { dadosForm } from '../models/dadosForm';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listar-dados',
  templateUrl: './listar-dados.page.html',
  styleUrls: ['./listar-dados.page.scss'],
})
export class ListarDadosPage implements OnInit {


  dadosTela : dadosForm[]=[];
  pos : number = 0;
  indexObj : number;


  constructor(public servico : DadosService,
              public rota : Router,
              public alert : AlertController) { }

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

  async alertExcluir(obj : dadosForm){
    this.indexObj = this.servico.encontrarPosicaoObj(obj);

    const alert = await this.alert.create({
      header: 'Excluir item !',
      message: 'Deseja realmente excluir o item ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Excluir',
          handler: async () => {
            this.servico.deletarItem(this.indexObj);
          }
        }
      ]
    });
    await alert.present();
  }

  editarItem(obj : dadosForm){
    this.indexObj = this.servico.encontrarPosicaoObj(obj);
    this.rota.navigate(['editar-obj/'+this.indexObj])
  }


}
