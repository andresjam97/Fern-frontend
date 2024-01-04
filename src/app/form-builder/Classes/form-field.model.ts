export interface FormField {
  type: string;
  name: string;
  label: string;
  validations: any;
  options?: string[];
  minLength?: number;
  head?: boolean;
  detail?: boolean;
}
