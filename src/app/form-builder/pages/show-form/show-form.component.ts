import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicForm } from '../../Classes/dynamic-form';
import { FormService } from '../../service/form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})

export class ShowFormComponent {
  parametroRecibido: any = '';
  title: any = '';
  dynamicForms: DynamicForm | null = null;
  dynamicFormsDetail: DynamicForm | null = null;
  detalles: any[] = []; // Almacena los datos ingresados
  columnConfigs: any[] =[]; // Configuración de las columnas
  displayedColumns: string[] = []; // Nombres de las colu
  heads: any; // Nombres de las colu
  details: any; // Nombres de las colu
  constructor(private route: ActivatedRoute, private formService: FormService, private _snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    
  }

  

  openSnackBar(message: string) {
    this._snackBar.open(message, "OK");
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.parametroRecibido = params.get('parametro');
      });

    this.formService.getForm(this.parametroRecibido).subscribe(data => {      
      const fields = data.fields;
      const title = data.title;
      this.title = title;
      
      this.dynamicForms = {
        fields: fields,
        formGroup: this.formService.toFormGroup(fields.filter((field: { head: boolean; }) => field.head === true))
      }


      this.dynamicFormsDetail = {
        fields: fields,
        formGroup: this.formService.toFormGroup(fields.filter((field: { detail: boolean; }) => field.detail === true))
      }


      const filteredFieldsHead = fields.filter((field: { head: boolean; }) => field.head === true);
      const filteredFieldsDetail = fields.filter((field: { detail: boolean; }) => field.detail === true);

      this.heads = filteredFieldsHead;
      this.details = filteredFieldsDetail;

      this.columnConfigs = this.details.filter((field: {
        label: any; name: any; 
      }) => field.label);
      this.displayedColumns = this.columnConfigs.map(field => field.name);
      console.log(this.details);
      
    });   
  }

  enviar() {
    const formData = this.dynamicForms?.formGroup.value;
    const detalleFormData = this.detalles;

    const combinedData = { ...formData, ...detalleFormData };

    if (combinedData) {      
      this.formService.sendformData(this.parametroRecibido,combinedData).subscribe(data=>{
        this.openSnackBar('Datos registrados con exito');
        if (this.dynamicForms?.formGroup) {
          this.dynamicForms.formGroup.reset();
          this.dynamicFormsDetail?.formGroup.reset();
        }
      });
    } else {
      this.openSnackBar('Error interno');
      console.error('El formulario no está inicializado');
    }
  
  }

  guardar() {
    const detalleFormData = this.dynamicFormsDetail?.formGroup.value;
    this.detalles = [...this.detalles, detalleFormData];
    this.dynamicFormsDetail?.formGroup.reset();
}


  
}
