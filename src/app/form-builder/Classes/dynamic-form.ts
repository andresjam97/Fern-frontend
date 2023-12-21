import { FormGroup } from "@angular/forms";
import { FormField } from "./form-field.model";

export interface DynamicForm {
  fields: FormField[];
  formGroup: FormGroup;
}
