import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.page.html',
  styleUrls: ['./form4.page.scss'],
})
export class Form4Page implements OnInit {

  dados = {
    nome : '',
    preferencias : ''
  }

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: any) {
    if(form.valid){
      console.log("Dados:",this.dados)
    }else{
      console.log("Form inválido!")
    }
  
  }  

}
