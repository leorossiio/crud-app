import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  
  task = [
    { description: 'Tarefa 1', completo: false },
    { description: 'Tarefa 2', completo: true },
    { description: 'Tarefa 3', completo: false },
    { description: 'Tarefa 4', completo: true },
    { description: 'Tarefa 5', completo: false }
  ];

  botaoConcluir(task: any){
    task.completo = !task.completo;
  }
}
