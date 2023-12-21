import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormField } from '../Classes/form-field.model';
import { DynamicForm } from '../Classes/dynamic-form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

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

}
