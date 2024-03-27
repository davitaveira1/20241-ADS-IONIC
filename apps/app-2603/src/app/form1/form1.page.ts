import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {

  dadosFormulario = {
    nome: '',
    sexo: '',
    telefone: '',
    matricula: '',
    alunoBilingue: false,
    cursosTecnologia: []
  };  

  constructor(public dados : DadosService) { }

  salvar(form: NgForm) {
    if (form.valid) {
      // Adiciona os dados do formulário ao array de dados armazenados
      console.log('Dados do formulário:', this.dadosFormulario);
      this.dados.adicionarDados(this.dadosFormulario)

      
      

      // Limpa o formulário após salvar os dados
      this.resetFormulario();
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

}
