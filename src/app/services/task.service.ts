import { Injectable } from '@angular/core';
import { Tasks } from '../models/mock-tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks() {
    return Tasks;
  }
}
