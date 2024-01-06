import { Component } from '@angular/core';
import { FormService } from '../../service/form.service';
import { Router } from '@angular/router';
import { FormHeader } from '../../Classes/form-header';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-all-created-forms',
  templateUrl: './show-all-created-forms.component.html',
  styleUrls: ['./show-all-created-forms.component.css']
})
export class ShowAllCreatedFormsComponent {

  forms: FormHeader[] = [];
  displayedColumns = ["title", "actions"];
  formsDataSource: MatTableDataSource<FormHeader> = new MatTableDataSource();
  constructor(private formService: FormService, private router: Router) { }

  ngOnInit() {
    this.formService.getAllForms().subscribe(
      forms => {
        this.formsDataSource = new MatTableDataSource(forms);
      }
    )
  }

  redireccionar1(form: FormHeader) {
    this.router.navigate(['/builder/form/' + form.id]);
  }

  redireccionar2(form: FormHeader) {
    this.router.navigate(['/builder/form/data/' + form.id]);
  }
}
