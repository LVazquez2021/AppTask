import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  listTasks: Task[] = [];
  nameTask = '';
  constructor() {}

  ngOnInit(): void {}

  addTask(): void {
    //creamos el objeto tarea
    const task: Task = {
      nombre: this.nameTask,
      estado: false,
    };
    console.log(task);
    //agrego el objeto tarea al array

    this.listTasks.push(task);
    console.log(this.listTasks);

    //reset form
    this.nameTask = '';
  }

  deleteTask(index: number): void {
    this.listTasks.splice(index, 1);
  }

  updateTask(task: Task, index: number): void {
    this.listTasks[index].estado = !task.estado;
  }
}
