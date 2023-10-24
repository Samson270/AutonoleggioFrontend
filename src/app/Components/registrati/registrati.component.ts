import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Utente } from 'src/app/Models/Utente';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {
  tmp: Utente;

  utenteForm = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    codiceFiscale: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    numeroTelefono: new FormControl(''),
    anniPatente: new FormControl(''),
  })
}
