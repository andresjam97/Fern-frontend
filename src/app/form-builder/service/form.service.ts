import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormField } from '../Classes/form-field.model';
import { DynamicForm } from '../Classes/dynamic-form';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url:string = "http://192.168.20.75:8080/api";
  constructor(public Http:HttpClient) { }

  toFormGroup(fields: FormField[] ) {
    const group: any = {};

    fields.forEach(field => {
      group[field.name] = new FormControl('', this.bindValidations(field.validations || []));
    });

    return new FormGroup(group);
  }

  private bindValidations(validations: string[],minLength?: number) {
    const validList = [];
    if (validations.includes('required')) {
      validList.push(Validators.required);
    }
    if (validations.includes('minLength') && minLength != null) {
      validList.push(Validators.minLength(minLength));
    }
    // Añadir más validaciones según sea necesario
    return Validators.compose(validList);
  }


  createDynamicForm(): DynamicForm {
    const newForm: DynamicForm = {
      fields: [],
      formGroup: new FormGroup({})
    };
    return newForm;
  }


  sendForm(fields:any, title:string): Observable<any>{
    return this.Http.post(`${this.url}/forms`, {fields , title });    
  }

  getForm(id:any): Observable<any>{
    return this.Http.get(`${this.url}/forms/${id}`);    
  }

  sendformData(id:string, form : any){
    return this.Http.post(`${this.url}/forms/${id}`, {form});    
  }

  getformData(id:string){
    return this.Http.get(`${this.url}/forms/${id}/data`);    
  }

}
