import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksBoardComponent } from './components/tasks-board/tasks-board.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: TasksBoardComponent,
  },
  {
    path: 'task/add/:id',
    component: EditTaskComponent,
  },
  {
    path: 'task/edit/:id',
    component: EditTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
