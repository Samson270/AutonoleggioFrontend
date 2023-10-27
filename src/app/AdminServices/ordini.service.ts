import { PrenotazioneDTO } from 'src/app/Models/PrenotazioneDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdiniService {
  ordiniUrl = "http://localhost:8080/prenotazione/all";
  constructor(private httpClient:HttpClient) { }

  getOrdini():Observable<PrenotazioneDTO[]>
  {
    return this.httpClient.get<PrenotazioneDTO[]>(this.ordiniUrl,{responseType: 'json'});
  }
}
