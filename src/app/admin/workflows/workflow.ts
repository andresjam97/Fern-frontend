import { Stage } from "./stage";

export interface Workflow {
    id: string;
    title: string;
    status: string;
    description: string;
    stages: Stage[];
}
