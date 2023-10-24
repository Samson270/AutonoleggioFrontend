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

  registrati(){
    this.tmp = new Utente(
      this.utenteForm.get(['nome']).value,
      this.utenteForm.get(['cognome']).value,
      this.utenteForm.get(['codiceFiscale']).value,
      this.utenteForm.get(['email']).value,
      this.utenteForm.get(['password']).value,
      this.utenteForm.get(['numeroTelefono']).value,
      this.utenteForm.get(['anniPatente']).value,
    )
  }
}
