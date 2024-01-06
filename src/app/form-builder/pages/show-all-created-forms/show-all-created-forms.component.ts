import { Component } from '@angular/core';
import { FormService } from '../../service/form.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-show-all-created-forms',
  templateUrl: './show-all-created-forms.component.html',
  styleUrls: ['./show-all-created-forms.component.css']
})


export class ShowAllCreatedFormsComponent {

  title:any = [];
  displayedColumns: string[] = ['title','id'];
  dataSource = this.title;

  constructor(private formService: FormService,  private router: Router) { }

  ngOnInit() {
    this.formService.getAllForms().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data.title);
      }
    )
  }

  redireccionar1(element : any) {
    // Implementa la lógica de redirección aquí
    this.router.navigate(['/builder/form/'+element.id]); // Cambia según tus necesidades
  }

  redireccionar2(element: any) {
    console.log(element);
    // Implementa la lógica de redirección aquí
    this.router.navigate(['/builder/form/data/'+element.id]); // Cambia según tus necesidades
  }

}
