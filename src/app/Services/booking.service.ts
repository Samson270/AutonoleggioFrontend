import { PeriodoNoleggio } from 'src/app/Models/PeriodoNoleggio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrenotazioneDTO } from '../Models/PrenotazioneDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private dispUrl = 'http://localhost:8080/prenotazione/disp';

  private addUrl = 'http://localhost:8080/prenotazione/add';

  constructor(private httpClient: HttpClient) { }

  controllaDisponibilita(periodoNoleggio: PeriodoNoleggio){
    return this.httpClient.post(this.dispUrl, periodoNoleggio, {responseType: "text"})
  }

  aggiungiPrenotazione(prenotazione: PrenotazioneDTO):Observable<object>{
    return this.httpClient.post(this.addUrl, prenotazione);
  }
}
