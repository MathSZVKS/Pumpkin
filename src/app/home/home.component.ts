import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public form: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.form = this.fb.group({
      sair: [null]
    });
  }

  ngOnInit() {
  }

  sair(){
    this.router.navigateByUrl('login');
  }

}
