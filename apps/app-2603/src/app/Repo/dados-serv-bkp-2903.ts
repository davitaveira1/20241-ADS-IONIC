import { Injectable } from '@angular/core';
import { DadosFormulario } from '../models/dados-formulario.interface'; // Importe a interface

@Injectable({
  providedIn: 'root'
})
export class DadosService {



  //private dadosCadastrados : any[] = [];

  //private dadosCadastrados: DadosFormulario[] = [];
  //public dadosCadastrados: DadosFormulario[] = [];
  private dadosCadastrados: DadosFormulario[] = [];

  constructor() { }

  //adicionarDados(dados : any){
  public adicionarDados(dados: DadosFormulario){
    
    /*
    let dados1 = {
      nome : dados.nome,
      sexo : dados.sexo,
      telefone : dados.telefone,
      matricula : dados.matricula,
      alunoBilingue : dados.alunoBilingue,
      cursosTecnologia : dados.cursosTecnologia
    }
    */
    

    //let dados1 : DadosFormulario = dados;
    
    //console.log("Serviço add1: "+JSON.stringify(dados1))
    this.dadosCadastrados.push({...dados});
    console.log("add dados serviço2: "+JSON.stringify(this.dadosCadastrados))  
    
  }

  public visualizarDados(){
    console.log("visualizar dados serviço: "+JSON.stringify(this.dadosCadastrados))
    return this.dadosCadastrados;
    
  }

}
