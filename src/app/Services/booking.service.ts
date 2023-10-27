import { PeriodoNoleggio } from 'src/app/Models/PeriodoNoleggio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private dispUrl = 'http://localhost:8080/auto/disp';

  constructor(private httpClient: HttpClient) { }

  controllaDisponibilita(periodoNoleggio: PeriodoNoleggio){
    return this.httpClient.post(this.dispUrl, periodoNoleggio, {responseType: "text"})
  }

  aggiungiPrenotazione(nome: string, cognome: string, username: string, targa: string,periodoNoleggio :PeriodoNoleggio){

  }
}
