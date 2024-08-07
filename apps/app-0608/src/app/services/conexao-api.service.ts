import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexaoApiService {


  api_url : string = 'http://localhost/apps/producao/20241/app-0608/api/api.php';

  constructor() { }

  public listarProdutos(){
    const body = {
      'action' : 'listarProdutos'
    }

    let bodyFd = new FormData();
    bodyFd.append('data',JSON.stringify(body))

    return fetch(this.api_url, {
      method : 'POST',
      body : bodyFd
    })
    .then(response => response.json())
    .then(data => {
      return data
    })


  }


}
