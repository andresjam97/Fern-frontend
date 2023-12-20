// dynamic-form-field.model.ts
export interface DynamicFormField {
  type: string;
  label: string;
  name: string;
  options?: string[];
}
