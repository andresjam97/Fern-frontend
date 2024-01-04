import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowFormComponent } from './pages/show-form/show-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShowFormDataComponent } from './pages/show-form-data/show-form-data.component';


@NgModule({
  declarations: [
    CreateFormComponent,
    ShowFormComponent,
    ShowFormDataComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    SharedModule,

  ]
})
export class FormBuilderModule { }
