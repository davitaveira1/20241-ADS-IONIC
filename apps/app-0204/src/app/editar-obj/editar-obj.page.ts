import { Component, OnInit } from '@angular/core';
import { dadosForm } from '../models/dadosForm';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../services/dados.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-obj',
  templateUrl: './editar-obj.page.html',
  styleUrls: ['./editar-obj.page.scss'],
})
export class EditarObjPage implements OnInit {

  obj : dadosForm;
  indice : number;

  cursoHTML: boolean = false;
  cursoPHP: boolean = false;
  cursoCSharp: boolean = false;  

  constructor(public param : ActivatedRoute,
              public servico : DadosService,
              public rota : Router,
              public toast : ToastController) { }

  ngOnInit() {

    this.param.params.subscribe(

      (data : any) => {
        this.indice = data.item;
        this.obj = this.servico.retornarObjViaPosicao(this.indice);
        console.log("dados: "+JSON.stringify(this.obj))
      }

    )

  }

  salvar(form: NgForm) {

    if (form.valid) { 

      this.servico.editarItem(this.obj);
      this.rota.navigate(['listar-dados']);
      this.mensagem('Obj editado com sucesso !',3000,'success');


    }

  
  }

  async mensagem(msg : any,duration : any,color : any) {
    const toast = await this.toast.create({
          message: msg,
          duration: duration,
          color: color
        });
        toast.present();
    }

}
