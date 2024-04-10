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

  obj: dadosForm;
  indice: number;

  cursoHTML: boolean;
  cursoPHP: boolean;
  cursoCSharp: boolean;


  constructor(public param: ActivatedRoute,
    public servico: DadosService,
    public rota: Router,
    public toast: ToastController) { }

  ngOnInit() {

    this.param.params.subscribe(

      (data: any) => {
        this.indice = data.item;
        this.obj = this.servico.retornarObjViaPosicao(this.indice);
        console.log("dados: " + JSON.stringify(this.obj))
        this.inicializarOpcoesCheckBox();
      }

    )

  }

  salvar(form: NgForm) {

    if (form.valid) {

      this.obj.cursos = []

      if (this.cursoHTML) {
        this.obj.cursos[0] = "HTML";
      }
      if (this.cursoPHP) {
        this.obj.cursos[1] = "PHP";
      }
      if (this.cursoCSharp) {
        this.obj.cursos[2] = "C#";
      }
      console.log("Vetor cursos: " + JSON.stringify(this.obj.cursos))

      this.servico.editarItem(this.obj);
      this.rota.navigate(['listar-dados']);
      this.mensagem('Obj editado com sucesso !', 3000, 'success');

    }


  }

  async mensagem(msg: any, duration: any, color: any) {
    const toast = await this.toast.create({
      message: msg,
      duration: duration,
      color: color
    });
    toast.present();
  }

  inicializarOpcoesCheckBox() {
    if (this.obj.cursos[0])
      this.cursoHTML = true
    else
      this.cursoHTML = false

    if (this.obj.cursos[1])
      this.cursoPHP = true
    else
      this.cursoPHP = false

    if (this.obj.cursos[2])
      this.cursoCSharp = true
    else
      this.cursoCSharp = false
  }

  atualizarOpcao0() {
    // Atualizar a variável quando o checkbox for alterado
    this.cursoHTML = !this.cursoHTML; // Alternar entre true e false
    console.log("valor HTML: " + this.cursoHTML)
  }

  atualizarOpcao1() {
    // Atualizar a variável quando o checkbox for alterado
    this.cursoPHP = !this.cursoPHP; // Alternar entre true e false
    console.log("valor PHP: " + this.cursoPHP)
  }

  atualizarOpcao2() {
    // Atualizar a variável quando o checkbox for alterado
    this.cursoCSharp = !this.cursoCSharp; // Alternar entre true e false
    console.log("valor C#: " + this.cursoCSharp)
  }

}
