import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../mock-tasks';
import { Task } from '../../models';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss'],
})
export class TasksBoardComponent implements OnInit {
  tasks: Task[] = Tasks;
  constructor() {}

  ngOnInit(): void {}
}
