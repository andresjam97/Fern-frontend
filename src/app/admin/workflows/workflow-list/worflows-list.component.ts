import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowService } from '../workflow.service';
import { Workflow } from '../workflow';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateWorkflowFormComponent } from '../create-workflow-form/create-workflow-form.component';

@Component({
  selector: 'app-worflows-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    CreateWorkflowFormComponent,
  ],
  templateUrl: './workflows-list.component.html',
  styleUrls: ['./workflows-list.component.css']
})
export class WorkflowsListComponent implements OnInit {

  workflows: Workflow[] = [];

  displayedColumns = ["title", "status", "actions"];

  constructor(
    private service: WorkflowService,
    public dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private router: Router,) { }

  ngOnInit(): void {
    this.service.getAllWorkflows().subscribe(workflows => {
      this.workflows = workflows;
    });
  }

  openCreateWorkflorDialog() {
    const dialogRef = this.dialog.open(CreateWorkflowFormComponent);

    dialogRef.afterClosed().subscribe((workflow: Workflow) => {
      if(!workflow) return;

      this.workflows = this.workflows.concat([workflow]);
      this._snackbar.open("Proceso creado correctamente", undefined, {
        duration: 3000,
      });
    });
  }

  displayDeleteWorkflowAlert(workflow: Workflow) {
    const dialogRef = this.dialog.open(DialogDeleteWorkflow, {
      data: { workflow }
    });

    dialogRef.afterClosed().subscribe(deleted => {
      if (!deleted) {
        return;
      }

      this.service.deleteWorkFlow(workflow.id)
        .subscribe({
          complete: () => {
            this.workflows = this.workflows.filter(w => w.id !== workflow.id);
            this._snackbar.open("Proceso borrado correctamente", undefined, {
              duration: 3000
            });
          },
          error: () => {
            this._snackbar.open("Error al borrar el proceso")
          }
        })
    });
  }

  openEditWorkFlow(workflow: Workflow) {
    this.router.navigate(["/admin/workflows", workflow.id, "edit"]);
  }
}

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
  ],
  template: `
    <h1 mat-dialog-title>¿Borrar proceso?</h1>
    <div mat-dialog-content>
      Seguro que deseas borrar el proceso <i>{{data.workflow.title}}</i>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close cdkFocusInitial>No</button>
      <button mat-button [mat-dialog-close]="true">Si</button>
    </div>
  `,
})
export class DialogDeleteWorkflow {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}