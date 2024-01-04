import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessAssignmentRoutingModule } from './process-assignment-routing.module';
import { GridAssignmentComponent } from './pages/grid-assignment/grid-assignment.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GridAssignmentComponent
  ],
  imports: [
    CommonModule,
    ProcessAssignmentRoutingModule,
    SharedModule
  ]
})
export class ProcessAssignmentModule { }
