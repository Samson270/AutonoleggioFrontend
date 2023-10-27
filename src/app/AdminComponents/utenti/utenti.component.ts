import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/AdminServices/utenti.service';
import { Utente } from 'src/app/Models/Utente';
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit{
  utenti:Utente[];
  constructor(private utentiService: UtentiService){}
  ngOnInit(): void {
    this.utentiService.getUtenti().subscribe((data) => {
      this.utenti = data;
    });
  }
} 
