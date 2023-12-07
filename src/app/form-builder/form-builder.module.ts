import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    SharedModule
  ]
})
export class FormBuilderModule { }
