import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Macchina } from '../Models/Macchina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  private baseUrl = 'http://localhost:8080/auto/add';

  constructor(private httpClient: HttpClient) { }

  addCar(car: Macchina):Observable<string>{
    return this.httpClient.post(this.baseUrl, car, {responseType: 'text'});
  }
}
