import { Route } from "@angular/router";
import { WorkflowsListComponent } from "./workflows/workflow-list/worflows-list.component";

export const ADMIN_ROUTES: Route[] = [
    { path: "", redirectTo: "workflows", pathMatch: "full" },
    { path: "workflows", component: WorkflowsListComponent },
];