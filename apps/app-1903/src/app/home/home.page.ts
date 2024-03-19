import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1 : number = 2;
  num2 : number = 10;
  soma : number = 0;

  constructor() {}

  somar(){
    console.log("soma: "+(this.num1+this.num2))
    this.soma = this.num1 + this.num2;

  }

}
