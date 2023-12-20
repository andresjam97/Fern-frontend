import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username:any;
  password:any;

  constructor(private authService: LoginService, private router: Router,private _snackBar: MatSnackBar){}
  openSnackBar(message: string) {
    this._snackBar.open(message, "OK");
  }

  login(): void {
    this.openSnackBar('Ingreso Realizado con Exito');
    const username = this.username;
    const password = this.password;

    this.authService.login({ username, password }).subscribe(
      (response) => {

        const token = response.token;
        this.authService.setSession(token);

        this.router.navigate(['/builder']);

      },
      (error) => {

        console.error('Error de inicio de sesión:', error);
      }
    );
  }
}
