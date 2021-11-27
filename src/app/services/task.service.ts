import { Injectable } from '@angular/core';
import { Tasks } from '../models/mock-tasks';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = Tasks;
  constructor() {}

  getTasks() {
    return this.tasks;
  }

  getTaskById(id?: number) {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(task: Task) {
    this.tasks?.push(task);
  }

  deleteTask(id?: number) {
    let task = this.tasks.find((task) => task.id === id)!;
    let index = this.tasks.indexOf(task, 0);
    this.tasks.splice(index, 1);
  }

  editTask(task: Task) {
    this.tasks.forEach(function (item) {
      if (item.id === task.id) {
        item.description = task.description;
        item.done = task.done;
      }
    });
  }
}
