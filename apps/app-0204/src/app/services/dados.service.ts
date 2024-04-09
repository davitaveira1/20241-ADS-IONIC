import { Injectable } from '@angular/core';
import { dadosForm } from '../models/dadosForm';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dadosCadastrados : dadosForm[] = [];
  indice : number;

  constructor() { }

  public adicionarDados(dados : dadosForm){

    this.dadosCadastrados.push({...dados});
    console.log("Dados serviço: "+JSON.stringify(this.dadosCadastrados))
    
  }

  public listarDados(){
    console.log("Listar dados: "+JSON.stringify(this.dadosCadastrados))
    return this.dadosCadastrados;
  }


  public encontrarPosicaoObj(objProcurado : dadosForm) : number{
    
    const pos = this.dadosCadastrados.findIndex(obj => JSON.stringify(obj) === JSON.stringify(objProcurado));
    //console.log("Pos: "+pos);
    return pos;

  }

  public retornarObjViaPosicao(pos : number){
    return this.dadosCadastrados[pos];
  }

  public deletarItem(index : number){
    this.dadosCadastrados.splice(index,1);
  }

  public editarItem(obj : dadosForm){
    this.indice = this.encontrarPosicaoObj(obj);
    this.dadosCadastrados.splice(this.indice,1,obj)
  }

}
