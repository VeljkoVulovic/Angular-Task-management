import { Component, OnInit, Input } from '@angular/core';
import { faTrashRestore, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() id?: number;
  @Input() color?: string;
  @Input() action?: string;
  faTrashRestore = faTrashRestore;
  faEdit = faEdit;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    if (this.id) {
      if (this.action === 'edit') {
        this.router.navigateByUrl(`task/edit/${this.id}`);
      } else {
        this.taskService.deleteTask(this.id);
      }
    }
  }
}
