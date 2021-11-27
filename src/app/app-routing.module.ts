import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksBoardComponent } from './pages/tasks-board/tasks-board.component';
import { AddEditTaskComponent } from './pages/add-edit-task/add-edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: TasksBoardComponent,
  },
  {
    path: 'task/add/:id',
    component: AddEditTaskComponent,
  },
  {
    path: 'task/edit/:id',
    component: AddEditTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
