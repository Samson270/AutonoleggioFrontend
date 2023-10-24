import { FormGroup, FormControl } from '@angular/forms';
import { Credentials } from './../../Models/Credentials';
import { Component } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent {

    credentials: Credentials;

    constructor(private app: AppService, private http: HttpClient, private router: Router){}

    credentialsForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  login(){
    this.credentials = new Credentials(
      this.credentialsForm.get('email').value,
      this.credentialsForm.get('password').value,
    );
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
     return false;

  }
}
