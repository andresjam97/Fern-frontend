import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { ShowFormComponent } from './pages/show-form/show-form.component';
import { ShowFormDataComponent } from './pages/show-form-data/show-form-data.component';
import { ShowAllCreatedFormsComponent } from './pages/show-all-created-forms/show-all-created-forms.component';

const routes: Routes = [
  {
    path : '',
    component : CreateFormComponent
  },
  {
    path : 'all-forms',
    component : ShowAllCreatedFormsComponent
  },
  {
    path: 'form/:parametro',
    component: ShowFormComponent
  },
  {
    path: 'form/data/:parametro',
    component: ShowFormDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
