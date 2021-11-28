import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() id?: number;
  btnName: string = 'Submit';
  btnClass: string = 'btn btn-submit';
  task: Task = {
    description: '',
    done: false,
  };

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    if (this.id) {
      this.task = this.taskService.getTaskById(this.id)!;
    }
  }

  onSubmit(form: NgForm) {
    let task: Task = {
      description: form.value.description,
      done: form.value.done,
    };

    if (this.id) {
      task.id = this.id;
      this.taskService.editTask(task);
    } else {
      task.id = Math.floor(Math.random() * 10000);
      this.taskService.addTask(task);
    }

    this.router.navigateByUrl('');
  }
}
