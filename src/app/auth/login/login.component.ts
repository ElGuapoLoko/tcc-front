import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService, NbAuthSocialLink, NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  user: any;
  submitted: boolean;
  socialLinks: NbAuthSocialLink[];
  rememberMe: boolean;

  formLogin = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(32)]],
  });

  constructor(public fb: FormBuilder, public route: Router) {

  }

  get usuario(){
    return this.formLogin.get('usuario');
  }

  get senha(){
    return this.formLogin.get('senha');
  }

  ngOnInit(): void {
   
  }

  login() {
    this.route.navigate(['/pages']);
  }

  dump(value){
    console.log(value);
    
  }

}
