import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridAssignmentComponent } from './pages/grid-assignment/grid-assignment.component';

const routes: Routes = [
  {
    path:'',
    component:GridAssignmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessAssignmentRoutingModule { }
