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

@Component({
  selector: 'app-grid-assignment',
  templateUrl: './grid-assignment.component.html',
  styleUrls: ['./grid-assignment.component.css']
})
export class GridAssignmentComponent {

  nuevaListaTitulo: string = '';
  listas: List[] = [    {
      id: 1,
      title: 'TO DO',
      cards: [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }]
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [{ id: 3, title: 'Task 3' }]
    }
  ];

  agregarLista() {
    if (this.nuevaListaTitulo) {
      this.listas.push({
        id: this.listas.length + 1,
        title: this.nuevaListaTitulo,
        cards: []
      });
      this.nuevaListaTitulo = '';
    }
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

  }
}
