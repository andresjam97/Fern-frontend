import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorflowsListComponent } from './workflows/worflows-list/worflows-list.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./login-module/login-module.module').then(m=>m.LoginModuleModule)
  },
  {
    path: 'builder',
    loadChildren:()=> import('./form-builder/form-builder.module').then(m => m.FormBuilderModule)
  },

  {
    path: 'assignment',
    loadChildren:()=> import('./process-assignment/process-assignment.module').then(m => m.ProcessAssignmentModule)
  },
  {
    path: "workflows",
    component: WorflowsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
