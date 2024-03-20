import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})
export class Form2Page implements OnInit {

  dados = {
    nome: '',
    genero: '',
    preferencias: false
  };

  constructor() {}

  submitForm(form: any) {
    if (form.valid) {
      console.log('Formulário válido. Dados:', this.dados);
      // Aqui você pode adicionar lógica para enviar os dados para o servidor
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }

  ngOnInit() {
  }

}
