import { Component, OnInit, Input } from '@angular/core';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task?: Task;
  faTimes = faTimes;
  faPen = faPen;

  constructor() {}

  ngOnInit(): void {}

  editTask(id?: number) {
    console.log(id);
  }

  deleteTask(id?: number) {
    console.log(id);
  }
}
