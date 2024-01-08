import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WorkflowService } from '../workflow.service';
import { Workflow } from '../workflow';

@Component({
  selector: 'app-edit-workflow',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edit-workflow.component.html',
  styleUrls: ['./edit-workflow.component.css']
})
export class EditWorkflowComponent implements OnInit {
  workflow: Workflow | undefined;

  constructor(private route: ActivatedRoute, private service: WorkflowService) { }

  ngOnInit(): void {
    const paramsMap = this.route.snapshot.paramMap;
    const workflowId = paramsMap.get('workflowId');

    if (!workflowId) return;

    this.service.getWorkflowById(workflowId).subscribe((workflow: Workflow) => this.workflow = workflow);
  }
}
