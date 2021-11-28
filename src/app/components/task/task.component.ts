import { Component, OnInit, Input } from '@angular/core';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;
  faPen = faPen;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  changeStatus(id?: number) {
    if (id) {
      this.taskService.changeStatus(id);
    }
  }
  deleteTask(id?: number) {
    if (id) {
      this.taskService.deleteTask(id);
    }
  }
}
