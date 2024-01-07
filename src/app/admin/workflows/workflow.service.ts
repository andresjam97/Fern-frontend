import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workflow } from './workflow';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {

  baseUrl = environment.apiUrl + "/workflows";

  constructor(private http: HttpClient) { }

  getAllWorkflows(): Observable<Workflow[]> {
    return this.http.get<Workflow[]>(this.baseUrl);
  }

  getWorkflowById(id: string) : Observable<Workflow>  {
    return this.http.get<Workflow>(this.baseUrl + `/${id}`);
  }

  createWorkflow(payload: any) {
    return this.http.post(this.baseUrl, payload);
  }

  deleteWorkFlow(id: string) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
