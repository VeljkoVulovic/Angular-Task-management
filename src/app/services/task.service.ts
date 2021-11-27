import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];
  constructor() {}

  setTasksToLocalStorage(tasks?: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasksFromLocalStorage() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return this.tasks;
  }

  getTaskById(id?: number) {
    return this.tasks.find((task) => task.id === id);
  }

  changeStatus(id?: number) {
    this.tasks.forEach(function (item) {
      if (item.id === id) {
        item.done = !item.done;
      }
    });
    this.setTasksToLocalStorage(this.tasks);
  }

  addTask(task: Task) {
    this.tasks?.push(task);
    this.setTasksToLocalStorage(this.tasks);
  }

  deleteTask(id?: number) {
    let task = this.tasks.find((task) => task.id === id)!;
    let index = this.tasks.indexOf(task, 0);
    this.tasks.splice(index, 1);
    this.setTasksToLocalStorage(this.tasks);
  }

  editTask(task: Task) {
    this.tasks.forEach(function (item) {
      if (item.id === task.id) {
        item.description = task.description;
        item.done = task.done;
      }
    });
    this.setTasksToLocalStorage(this.tasks);
  }
}
