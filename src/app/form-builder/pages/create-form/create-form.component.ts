import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { DynamicFormField } from '../../Classes/dynamic-form-field.mode';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent {

  formFields: DynamicFormField[] = [];
  form: FormGroup;

  dynamicFormOptions = {
    fieldTypes: ['text', 'select'],
    validations: ['required', 'pattern']
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }


  addField() {
    const newField: DynamicFormField = {
      type: 'text',
      label: 'Nuevo Campo',
      name: 'newField', // Puedes proporcionar un valor predeterminado o dejarlo en blanco
      options: [] // Para campos de texto, puedes dejarlo como un array vacío
    };
    this.formFields.push(newField);
    this.form.addControl(newField.name, this.fb.control(''));
  }

  addSelectField() {
    const newSelectField: DynamicFormField = {
      type: 'select',
      label: 'Nuevo Campo de Selección',
      name: 'newSelectField',
      options: ['Opción 1', 'Opción 2', 'Opción 3']
    };
    this.formFields.push(newSelectField);
    this.form.addControl(newSelectField.name, this.fb.control(''));
  }

  addTextAreaField() {
    const newTextAreaField: DynamicFormField = {
      type: 'textarea',
      label: 'Nuevo Campo de Texto',
      name: 'newTextAreaField',
      options: [] // Para campos de texto, puedes dejarlo como un array vacío
    };
    this.formFields.push(newTextAreaField);
    this.form.addControl(newTextAreaField.name, this.fb.control(''));
  }


  removeField(index: number) {
    const fieldName = this.formFields[index].name;
    this.form.removeControl(fieldName);
    this.formFields.splice(index, 1);
  }

  getFieldNameControlName(index: number): string {
    return `name_${index}`;
  }

  sendForm() {
    console.log(this.formFields);
  }
}
