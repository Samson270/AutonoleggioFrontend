import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../Models/Credentials';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggatoSubject = new BehaviorSubject<boolean>(false);
  loggato$ = this.loggatoSubject.asObservable();
  nome: string;
  isAdmin: boolean;

  private baseUrl='http://localhost:8080/user/login'

  constructor(private httpClient: HttpClient) { }

  loginUser(credentials: Credentials): Observable<object>{
    return this.httpClient.post(this.baseUrl, credentials, { withCredentials: true });
  }

 setLoggato(nome: string, isAdmin: boolean) {
    this.nome = nome;
    this.isAdmin = isAdmin;
    this.loggatoSubject.next(true);
  }

  logout(){
    this.loggatoSubject.next(false);
  }
}
