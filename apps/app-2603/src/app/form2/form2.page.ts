import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})
export class Form2Page implements OnInit {

  opcao1: boolean = false;
  opcao2: boolean = false;
  opcao3: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  atualizarOpcao1() {
    // Atualizar a variável quando o checkbox for alterado
    this.opcao1 = !this.opcao1; // Alternar entre true e false
    //console.log('Opção 1:', this.opcao1);
  }

  atualizarOpcao2() {
    // Atualizar a variável quando o checkbox for alterado
    this.opcao2 = !this.opcao2; // Alternar entre true e false
    //console.log('Opção 1:', this.opcao1);
  }

  atualizarOpcao3() {
    // Atualizar a variável quando o checkbox for alterado
    this.opcao3 = !this.opcao3; // Alternar entre true e false
    //console.log('Opção 1:', this.opcao1);
  }

  salvar(form: NgForm) {

    console.log('Opção 1:', this.opcao1);
    console.log('Opção 2:', this.opcao2);
    console.log('Opção 3:', this.opcao3);
  }

}
