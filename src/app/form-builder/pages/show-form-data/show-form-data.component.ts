import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../../service/form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-form-data',
  templateUrl: './show-form-data.component.html',
  styleUrls: ['./show-form-data.component.css']
})
export class ShowFormDataComponent {

  formData:any;
  parametroRecibido: any = '';

  constructor(private route: ActivatedRoute, private formService: FormService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.parametroRecibido = params.get('parametro');
    });
    this.formService.getformData(this.parametroRecibido).subscribe(
      (data: any) =>{
        data.data = JSON.parse(data.data)
        this.formData = data;
console.log(this.formData);

      }
    )
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "OK");
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
}

}
