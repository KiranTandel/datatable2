import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  txtEmail: string;
  txtPassword: string;
  localStorageEmail: string;
  localStoragePassword: string;


  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.txtEmail = '';
    this.txtPassword = '';
    this.localStorageEmail = '';
    this.localStoragePassword = '';
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  public loginUser() {
    this.txtEmail = this.loginForm.get('email').value;
    this.txtPassword = this.loginForm.get('password').value;

    this.localStorageEmail = localStorage.getItem('email');
    this.localStoragePassword = localStorage.getItem('password');

    if (this.txtEmail === this.localStorageEmail && this.txtPassword === this.localStoragePassword) {
      alert("login successfull....");
      this.router.navigate(["/datatable"]);
    }
    else {
      alert(`invalid email or password`);
    }

  }

  public onReset(): void {
    this.loginForm.reset();
  }

}
