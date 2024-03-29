import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route : Router) {}

  form1(){
    this.route.navigate(['/form1'])
  }

  form2(){
    this.route.navigate(['/form2'])
  }  

  visualizarDados(){
    this.route.navigate(['/visualizar-dados'])

  }

}
