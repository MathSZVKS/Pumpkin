import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public errorMsg: string = '';
  public carregando: boolean = false;
  public emailCadastrado: String = 'pumpkin@gmail.com';
  public senhaCadastrada: String = 'pumpkin123';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      login: [null, Validators.compose([Validators.required, Validators.email])],
      senha: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value);
    if (this.form.invalid){
      return;
    }

    this.errorMsg = '';
    this.carregando = true;

    if(this.form.value.login == this.emailCadastrado && this.form.value.senha == this.senhaCadastrada){
      this.carregando = true;
      this.router.navigateByUrl('/');
    }else{
      this.carregando = false;
      this.errorMsg = "Dados de acesso inválidos D:"
    }
  }
}
