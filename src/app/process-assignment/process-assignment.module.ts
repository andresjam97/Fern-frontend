import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessAssignmentRoutingModule } from './process-assignment-routing.module';
import { GridAssignmentComponent } from './pages/grid-assignment/grid-assignment.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { CardComponent } from './pages/card/card.component';
import { FormsDialogsComponent } from './pages/addons/forms-dialogs/forms-dialogs.component';


@NgModule({
  declarations: [
    GridAssignmentComponent,
    ListComponent,
    CardComponent,
    FormsDialogsComponent
  ],
  imports: [
    CommonModule,
    ProcessAssignmentRoutingModule,
    SharedModule
  ]
})
export class ProcessAssignmentModule { }
