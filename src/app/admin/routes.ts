import { Route } from "@angular/router";
import { EditWorkflowComponent } from "./workflows/edit-workflow/edit-workflow.component";

export const ADMIN_ROUTES: Route[] = [
    { path: "workflows/:workflowId", component: EditWorkflowComponent }
];