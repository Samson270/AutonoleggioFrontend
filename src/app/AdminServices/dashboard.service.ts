import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url='http://localhost:8080/user/count';
  private urlServerStatus='http://localhost:8080/server/status';
  constructor(private http: HttpClient) {}

  getUtentiTotali():Observable<number>
  {
    return this.http.get<number>(this.url);
  }

  getServerStatus(): Observable<string> {
    return this.http.get(this.urlServerStatus, { responseType: 'text' }).pipe(
    catchError(error => {
    console.error('Errore nella richiesta:', error);
    throw error;
    })
    );
  }
}
