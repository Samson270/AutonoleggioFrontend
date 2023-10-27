import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoNoleggio } from '../Models/PeriodoNoleggio';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private dispUrl = 'http://localhost:8080/auto/disp';

  constructor(private httpClient: HttpClient) { }

  controllaDisponibilita(periodoNoleggio: PeriodoNoleggio){
    return this.httpClient.post(this.dispUrl, periodoNoleggio, {responseType: "text"})
  }
}
