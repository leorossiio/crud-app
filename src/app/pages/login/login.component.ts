import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  email: string = ""
  password: string = ""

  login() {
    if(this.email == 'admin' && this.password == '1234'){
    this.router.navigate(["/app"]);
    }
    else if(this.email == '' || this.password == ''){
      alert("Preencha os campos!");
    }
    else{
      alert("Usuário inválido");
      this.email = '';
      this.password = '';
    }
  }
}
