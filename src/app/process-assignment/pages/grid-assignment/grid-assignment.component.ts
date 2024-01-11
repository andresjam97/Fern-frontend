import { Component } from '@angular/core';
import { List } from '../../Models/list.model';
import { Card } from '../../Models/card.model';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FormsDialogsComponent } from '../addons/forms-dialogs/forms-dialogs.component';
import { FormHeader } from 'src/app/form-builder/Classes/form-header';
@Component({
  selector: 'app-grid-assignment',
  templateUrl: './grid-assignment.component.html',
  styleUrls: ['./grid-assignment.component.css']
})


export class GridAssignmentComponent {
  constructor(public dialog: MatDialog) {}
  form: string = '';
  nombreProceso: string = '';
  descripcionProceso: string = '';
  listaProcesos: any[] = [];
  selectedForm: FormHeader[] = [];
  openDialog() {
    const dialogRef = this.dialog.open(FormsDialogsComponent,{
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí recibes los datos emitidos desde el diálogo
      console.log(result);
      this.selectedForm = result;
    });
  }

  agregarProceso(){
    const proceso = {
      titulo: this.nombreProceso,
      descripcion: this.descripcionProceso
    };
    this.listaProcesos.push(proceso);


    this.nombreProceso = '';
    this.descripcionProceso = '';
  }
  // listas: List[] = [    {
  //     id: 1,
  //     title: 'Etapa 1',
  //     cards: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }]
  //   },
  //   {
  //     id: 2,
  //     title: 'Etapa 2',
  //     cards: [{ id: 3, title: 'Task 3' }]
  //   }
  // ];

  // agregarLista() {
  //   if (this.nuevaListaTitulo) {
  //     this.listas.push({
  //       id: this.listas.length + 1,
  //       title: this.nuevaListaTitulo,
  //       cards: []
  //     });
  //     this.nuevaListaTitulo = '';
  //   }
  // }

  // drop(event: CdkDragDrop<any>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }

  // }
}
