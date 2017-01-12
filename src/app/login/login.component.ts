import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formSubmited: boolean = false;
  message: string = '';
  messageClass: string;
  loggedIn: boolean = false;

  constructor(fb: FormBuilder, private api: ApiService) {

    this.form = fb.group({
      nameControl: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordControl: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.loggedIn = api.isLoggedIn();
    console.log(`loggedIn ${this.loggedIn}`);
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value['passwordControl']);
    this.formSubmited = true;
    this.loggedIn = this.api.isLoggedIn();
    this.api.login(this.form.value['nameControl'], this.form.value['passwordControl'], (success: boolean) => {
      this.formSubmited = false;
      this.messageClass = success ? 'positive' : 'negative';
      this.message = success ? 'Success! You logged in' : 'Check your username and password';
      this.loggedIn = true;
    });
  }

  logout() {
    this.api.logout();
    this.loggedIn = false;
  }
}
