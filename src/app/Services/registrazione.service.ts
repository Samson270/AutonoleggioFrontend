import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../Models/Utente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  private url='http://localhost:8080/user/save'

  constructor(private httpClient: HttpClient) { }

  signUpUser(utente: Utente): Observable<string>{
    return this.httpClient.post(this.url, utente, {responseType: 'text'});
  }
}
