import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { DadosFormulario } from '../models/dados-formulario.interface';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {

  dadosFormulario: DadosFormulario = {
    nome: '',
    sexo: '',
    telefone: '',
    matricula: '',
    alunoBilingue: false,
    cursosTecnologia: [] as string[]
  };

  cursoHTML: boolean = false;
  cursoPHP: boolean = false;
  cursoCSharp: boolean = false;

  constructor(public dados : DadosService, public route : Router) { }

  salvar(form: NgForm) {
    if (form.valid) {
      // Adiciona os dados do formulário ao array de dados armazenados
      if (this.dadosFormulario.alunoBilingue === undefined || this.dadosFormulario.alunoBilingue === null) {
        this.dadosFormulario.alunoBilingue = false;
      }

      if (this.cursoHTML) {
        this.dadosFormulario.cursosTecnologia.push("HTML");
      }
      if (this.cursoPHP) {
        this.dadosFormulario.cursosTecnologia.push("PHP");
      }
      if (this.cursoCSharp) {
        this.dadosFormulario.cursosTecnologia.push("C#");
      }

      console.log('Dados do formulário:', JSON.stringify(this.dadosFormulario));
      this.dados.adicionarDados(this.dadosFormulario)     

      // Limpa o formulário após salvar os dados
      this.resetFormulario();
      this.route.navigate(['/home'])
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }

  resetFormulario() {
    // Reseta os campos do formulário
    this.dadosFormulario.nome = '';
    this.dadosFormulario.sexo = '';
    this.dadosFormulario.telefone = '';
    this.dadosFormulario.matricula = '';
    this.dadosFormulario.alunoBilingue = false;
    this.dadosFormulario.cursosTecnologia = [];
  }  

  ngOnInit() {
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
