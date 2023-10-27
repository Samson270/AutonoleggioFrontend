import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Macchina } from '../Models/Macchina';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  private addUrl = 'http://localhost:8080/auto/add';

  private getUrl = 'http://localhost:8080/auto/all';

  constructor(private httpClient: HttpClient) { }

  addCar(car: Macchina):Observable<string>{
    return this.httpClient.post(this.addUrl, car, {responseType: 'text'});
  }

  getAllCars(){
    return this.httpClient.get(this.getUrl, {responseType: 'json'});
  }

}
