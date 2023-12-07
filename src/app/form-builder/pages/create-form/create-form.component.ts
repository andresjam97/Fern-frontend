import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


interface ReglaValidacion {
  tipo: string;
  valor?: any;
}

interface CampoFormulario {
  nombre: string;
  label: string;
  tipo: string;
  validaciones?: ReglaValidacion[];
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent {
  camposFormulario: CampoFormulario[] = [];
  miFormulario: FormGroup = new FormGroup({});
  tipoCampoSeleccionado: string = '';
  nombreCampo: string = '';
  labelCampo: string = '';
  reglaSeleccionada: string = '';
  valorRegla: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.camposFormulario = [
      { nombre: 'nombre', label: 'Nombre', tipo: 'text', validaciones: [{ tipo: 'required' }] },
      { nombre: 'correo', label: 'Correo', tipo: 'email', validaciones: [{ tipo: 'required' }, { tipo: 'email' }] },
    ];

    this.actualizarFormulario();
  }

  actualizarFormulario() {
    const group: { [key: string]: any } = {};
  
    this.camposFormulario.forEach(campo => {
      const control = this.formBuilder.control('', this.obtenerValidaciones(campo.validaciones));
      group[campo.nombre] = control;
    });
    this.miFormulario = this.formBuilder.group(group);
  }
  

  obtenerValidaciones(validadores: ReglaValidacion[] = []): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const validaciones: ValidatorFn[] = (validadores || []).map(v => {
        switch (v.tipo) {
          case 'required':
            return Validators.required;
          case 'email':
            return Validators.email;
          default:
            return null; 
        }
      }).filter(v => v !== null) as ValidatorFn[];
  
      return Validators.compose(validaciones)(control);
    };
  }

  onCampoDropped(event: CdkDragDrop<CampoFormulario[]>) {
    moveItemInArray(this.camposFormulario, event.previousIndex, event.currentIndex);
  }

  agregarCampo() {
    const nuevaRegla: ReglaValidacion = { tipo: this.reglaSeleccionada, valor: this.valorRegla };
    const nuevoCampo: CampoFormulario = {
      nombre: this.nombreCampo,
      label: this.labelCampo,
      tipo: this.tipoCampoSeleccionado,
      validaciones: [nuevaRegla],
    };
    this.camposFormulario.push(nuevoCampo);
    this.actualizarFormulario();
  }

  submitForm() {
      console.log(this.camposFormulario);
  }
}
