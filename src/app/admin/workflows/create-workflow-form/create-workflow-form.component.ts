import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WorkflowService } from '../workflow.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-create-workflow-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './create-workflow-form.component.html',
  styleUrls: ['./create-workflow-form.component.css']
})
export class CreateWorkflowFormComponent {
  constructor(private service: WorkflowService, public dialogRef: MatDialogRef<CreateWorkflowFormComponent>) { }

  loading = false;
  workflowForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  }, { validators: Validators.required });

  saveWorkflow() {
    if(this.workflowForm.invalid) return;

    this.loading = true;
    const payload  = this.workflowForm.value;
    this.service.createWorkflow(payload).subscribe({
      next: (workflow) => {
        this.dialogRef.close(workflow);
      },
      error: console.error
    });
  }
}
