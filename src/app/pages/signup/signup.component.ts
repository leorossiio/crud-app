import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent {
  usuario = {
    email: '',
    nome: '',
    senha: ''
  }

  cadastrarUsuario(){
    console.log(this.usuario);
    
  }
}
