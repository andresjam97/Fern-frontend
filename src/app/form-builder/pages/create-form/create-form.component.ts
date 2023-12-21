import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../Classes/form-field.model';
import { FormService } from '../../service/form.service';
import { DynamicForm } from '../../Classes/dynamic-form';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  dynamicForms: DynamicForm[] = [];
  newFieldType = 'text';
  newFieldLabel = '';
  newFieldName = '';
  newFieldValidations: string[] = [];
  newFieldOptions: string[] = [];
  optionInput: string = '';
  minLengthValue: number | undefined; // Cambiar a number | undefined
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.addNewForm();
  }

  addNewForm() {
    this.dynamicForms.push({
      fields: [],
      formGroup: new FormGroup({})
    });
  }
  sendForm(){
    console.log(this.dynamicForms);
  }

  addFieldToForm(dynamicForm: DynamicForm) {
    const newField: FormField = {
      type: this.newFieldType,
      name: this.newFieldName || `field${dynamicForm.fields.length}`,
      label: this.newFieldLabel || `Field ${dynamicForm.fields.length}`,
      validations: this.newFieldValidations,
      minLength: this.newFieldValidations.includes('minLength') ? this.minLengthValue ?? undefined : undefined,
      options: this.newFieldType === 'select' ? [...this.newFieldOptions] : undefined
    };
    dynamicForm.fields.push(newField);
    dynamicForm.formGroup = this.formService.toFormGroup(dynamicForm.fields);
    this.resetFieldConfig();
  }

  addOption(option: string) {
    if (option) {
      this.newFieldOptions.push(option);
      this.optionInput = '';
    }
  }

  private resetFieldConfig() {
    // Reset field configuration after adding a field
    this.newFieldType = 'text';
    this.newFieldLabel = '';
    this.newFieldName = '';
    this.newFieldValidations = [];
    this.newFieldOptions = [];
    this.optionInput = '';
  }

  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    if (fileList) {
      // Lógica para manejar los archivos cargados
      // Por ejemplo, puedes tomar el primer archivo con fileList[0]
    }
  }
}
