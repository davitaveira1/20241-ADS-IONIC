import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.page.html',
  styleUrls: ['./form3.page.scss'],
})
export class Form3Page implements OnInit {

  contato = {
    nome : '',
    data : '',
    notificacoes : false
  }

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: any) {
    if(form.valid){
      console.log("Dados:",this.contato)
    }else{
      console.log("Form inválido!")
    }
  
  }


}
