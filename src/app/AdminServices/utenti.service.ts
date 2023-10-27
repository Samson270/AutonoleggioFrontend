import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../Models/Utente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private urlUtenti = "http://localhost:8080/user/all";
  constructor(private httpClient:HttpClient) { }

  getUtenti():Observable<Utente[]>
  {
    return this.httpClient.get<Utente[]>(this.urlUtenti,{responseType: 'json'});
  }
}