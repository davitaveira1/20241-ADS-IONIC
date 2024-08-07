import { Component, OnInit } from '@angular/core';
import { ConexaoApiService } from '../services/conexao-api.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {

  produtos : any[] = []
  nome : string = "";

  constructor(public serv : ConexaoApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.produtos = []
   this.carregarProdutos();
  }

  //método da página
  carregarProdutos(){
    this.serv.listarProdutos()
    .then(result => {
      console.log(result)
      if(result.ok){
        console.log("Mensagem: "+JSON.stringify(result["message"]))

        for(let p of result["result"]){
          this.produtos.push(p)
        }
      }else{
        console.log("Mensagem: "+result["message"])
      }

    })
    
  }

}
