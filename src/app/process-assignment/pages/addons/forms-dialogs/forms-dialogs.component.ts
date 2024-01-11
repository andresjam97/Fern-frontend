import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormHeader } from 'src/app/form-builder/Classes/form-header';
import { FormService } from 'src/app/form-builder/service/form.service';

@Component({
  selector: 'app-forms-dialogs',
  templateUrl: './forms-dialogs.component.html',
  styleUrls: ['./forms-dialogs.component.css']
})
export class FormsDialogsComponent {

  constructor(public dialogRef: MatDialogRef<FormsDialogsComponent>, private formService: FormService) {}

  forms: FormHeader[] = [];
  displayedColumns = ["title", "actions"];
  formsDataSource: MatTableDataSource<FormHeader> = new MatTableDataSource();

  ngOnInit() {
    this.formService.getAllForms().subscribe(
    data=>{
      this.formsDataSource = new MatTableDataSource(data);
    });
  }

  onNoClick(): void {
    this.dialogRef.close("datos desde ek hijo xd");
  }
  seleccionar(id:any) {
    console.log(id.id);
    this.dialogRef.close(id);
  }

  cerrarDialogo(): void {

    this.dialogRef.close('Datos a Emitir');
  }
}
