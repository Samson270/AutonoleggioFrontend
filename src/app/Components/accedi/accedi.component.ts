import { FormGroup, FormControl } from '@angular/forms';
import { Credentials } from './../../Models/Credentials';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent {

    credentials: Credentials;

    constructor( private router: Router, private loginService: LoginService, private http: HttpClient){}

    credentialsForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  login(){
    this.credentials = new Credentials(
      this.credentialsForm.get('username').value,
      this.credentialsForm.get('password').value,
    );
    console.log(this.credentials);
    this.loginService.loginUser(this.credentials).subscribe((res: any) =>{
      console.log(res);
      if(res.message == "Email Not Exist"){
        alert("Email Not Exist");
      }else if(res.message == "Login Succes"){
        if(this.credentials.username == "admin@gmail.com" && this.credentials.password == "Password123"){
          this.loginService.setLoggato(res.name, true);
        this.router.navigateByUrl("/admin-page");
        } else {
            this.loginService.setLoggato(res.name, false);
            this.router.navigateByUrl("/home");
        }
      }else{
        alert("Incorrect email and password not match");
      }
    });
  }
}
