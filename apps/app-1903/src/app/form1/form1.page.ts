import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {

  nome : string = "";

  constructor() { }

  ngOnInit() {
  }

  salvar(){
    console.log("Nome digitado: "+this.nome);
  }

}
