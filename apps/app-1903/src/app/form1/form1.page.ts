import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {

  contato = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  constructor() { }

  ngOnInit() {
  }



  salvar(form: NgForm) {
    if (form.valid) {
      console.log("Dados: ", this.contato);
    } else {
      console.log("Formulário inválido!")
    }
  }

}
