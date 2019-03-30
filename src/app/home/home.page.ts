import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userName: ['', Validators.compose([Validators.minLength(4), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'), Validators.required])]
    });
  }
}
