import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url='http://localhost:8080/user/count';
  constructor(private http: HttpClient) {}

  getUtentiTotali():Observable<number>
  {
    return this.http.get<number>(this.url);
  }
}
