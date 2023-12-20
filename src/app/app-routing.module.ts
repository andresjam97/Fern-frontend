import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./login-module/login-module.module').then(m=>m.LoginModuleModule)
  },
  {
    path: 'builder',
    loadChildren:()=> import('./form-builder/form-builder.module').then(m => m.FormBuilderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }