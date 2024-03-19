import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  tarefas : string[] = ['Tarefa a','Tarefa b','Tarefa c'];

  constructor() { }

  ngOnInit() {
  }

}
