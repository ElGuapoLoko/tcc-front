import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(32)]],
    confirmacao_senha: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(32)]],

    termos: false
  });

  constructor(public fb: FormBuilder) {
  }


  ngOnInit(): void {
  }

  get nome(){
    return this.formRegister.get('nome');
  }

  get email(){
    return this.formRegister.get('email');
  }

  get senha(){
    return this.formRegister.get('senha');
  }

  get confirmacao_senha(){
    return this.formRegister.get('confirmacao_senha');
  }

  get termos(){
    return this.formRegister.get('termos');
  }

}
