import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dadosForm } from '../models/dadosForm';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  dadosFormulario: dadosForm = {
    nome: '',
    sexo: '',
    tel: '',
    mat: '',
    bilingue: false,
    cursos: [] as string[]
  };

  cursoHTML: boolean = false;
  cursoPHP: boolean = false;
  cursoCSharp: boolean = false;

  constructor(public rota : Router,
              public servico : DadosService) { }

  ngOnInit() {
  }

  salvar(form: NgForm) {
    if (form.valid) {     

      if (this.cursoHTML) {
        this.dadosFormulario.cursos.push("HTML");
      }
      if (this.cursoPHP) {
        this.dadosFormulario.cursos.push("PHP");
      }
      if (this.cursoCSharp) {
        this.dadosFormulario.cursos.push("C#");
      }

      console.log("Dados preenchidos: " + JSON.stringify(this.dadosFormulario))

      //acionar o serviço
      this.servico.adicionarDados(this.dadosFormulario);

      this.resetFormulario();
      this.rota.navigate(['home'])

    }
  }

  resetFormulario() {
    // Reseta os campos do formulário
    this.dadosFormulario.nome = '';
    this.dadosFormulario.sexo = '';
    this.dadosFormulario.tel = '';
    this.dadosFormulario.mat = '';
    this.dadosFormulario.bilingue = false;
    this.dadosFormulario.cursos = [];


  }  

  atualizarOpcao1() {
    // Atualizar a variável quando o checkbox for alterado
    this.cursoHTML = !this.cursoHTML; // Alternar entre true e false
  }

  atualizarOpcao2() {
    // Atualizar a variável quando o checkbox for alterado
    this.cursoPHP = !this.cursoPHP; // Alternar entre true e false
  }

  atualizarOpcao3() {
    // Atualizar a variável quando o checkbox for alterado
    this.cursoCSharp = !this.cursoCSharp; // Alternar entre true e false
  }

}
