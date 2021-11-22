import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tasks } from '../mock-tasks';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(Tasks);
    return tasks;
  }
}
