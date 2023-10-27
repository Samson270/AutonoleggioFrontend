import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Macchina } from 'src/app/Models/Macchina';
import { PeriodoNoleggio } from 'src/app/Models/PeriodoNoleggio';
import { AddCarService } from 'src/app/Services/add-car.service';
import { BookingService } from 'src/app/Services/booking.service';
import { LoginService } from 'src/app/Services/login.service';
import { PrenotazioneDTO } from 'src/app/Models/PrenotazioneDTO';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { firstValueFrom } from 'rxjs';




@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  macchine: Macchina[];
  loggato:boolean;
  minDate: string;
  retDate: string;


  constructor(private addCarService: AddCarService, private loginService:LoginService, private bookingService: BookingService, private router: Router){
    const today = new Date(); 
    this.minDate = today.toISOString().split('T')[0];
  }
  

  periodoNoleggio = new FormGroup({
    dataInizio: new FormControl(''),
    dataFine: new FormControl(''),
});

  ngOnInit(){
    this.addCarService.getAllCars().subscribe((res: Macchina[]) =>{
      this.macchine = res;
    });
    this.loginService.loggato$.subscribe((res:boolean) => {
      this.loggato = res;
    })
  }

  cambiaRet(){
      const dataInizio = this.periodoNoleggio.get('dataInizio').value;
    if (dataInizio) {
      const dataTmp = new Date(dataInizio);
      dataTmp.setDate(dataTmp.getDate() + 3);
      this.retDate = dataTmp.toISOString().split('T')[0];
    } else {
      this.retDate = ''; // Imposta retDate su vuoto se dataInizio non è impostato
    }
  }
   controllaData(targa: string){
    let tmp1 = new Date(this.periodoNoleggio.get('dataInizio').value);
    let tmp2 = new Date(this.periodoNoleggio.get('dataFine').value);
    let tmp = new PeriodoNoleggio(tmp1, tmp2);
    console.log(targa);
    console.log(tmp);
    this.bookingService.controllaDisponibilita(tmp).subscribe((res: string) => {
      if(res == "non disponibile"){
        console.log("Data immessa non disponibile");
      } else if(res == "disponibile"){
        this.aggiungiPrenotazione(targa, tmp);
      } else {
        alert("qualcosa è andato storto");
      }
    });
   }
    aggiungiPrenotazione(targa: string, tmp: PeriodoNoleggio) {
      const prenotazione = new PrenotazioneDTO(this.loginService.nome, this.loginService.cognome, this.loginService.username, targa, tmp.dataRitiro, tmp.dataRitorno);
      console.log(prenotazione);
    
      this.bookingService.aggiungiPrenotazione(prenotazione).subscribe((data: any) => {
        if (data.message === "Prenotazione avvenuta con successo") {
          console.log(data);
          alert("Il tuo ID prenotazione è " + data.id);
        } else {
          alert("Qualcosa è andato storto");
        }
      });
    }
}
