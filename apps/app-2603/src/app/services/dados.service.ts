import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dadosCadastrados : any[] = [];

  constructor() { }

  adicionarDados(dados : any){
    let dados1 = {
      nome : dados.nome,
      sexo : dados.sexo,
      telefone : dados.telefone,
      matricula : dados.matricula,
      bilingue : dados.bilingue,
      cursos : dados.cursos
    }
    console.log("Serviço add: "+dados1.nome)
    this.dadosCadastrados.push(dados1);
    
  }

  visualizarDados(){
    console.log("visualizar dados serviço: "+this.dadosCadastrados)
    return this.dadosCadastrados;
    
  }

}
