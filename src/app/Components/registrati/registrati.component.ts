import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/Models/Utente';
import { RegistrazioneService } from 'src/app/Services/registrazione.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {
  tmp: Utente;

  constructor(private router: Router, private registrazioneService: RegistrazioneService){

  }

  utenteForm = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    codiceFiscale: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    numeroTelefono: new FormControl(''),
    anniPatente: new FormControl(''),
  })

  registrati(){
    this.tmp = new Utente(
      this.utenteForm.get(['nome']).value,
      this.utenteForm.get(['cognome']).value,
      this.utenteForm.get(['username']).value,
      this.utenteForm.get(['password']).value,
      this.utenteForm.get(['numeroTelefono']).value,
      this.utenteForm.get(['anniPatente']).value,
    )
    this.registrazioneService.signUpUser(this.tmp).subscribe((res: string) =>{
      if(res == this.tmp.nome){
        this.router.navigateByUrl("/accedi");
      } else{
        alert("qualcosa è andato storto");
      }
    })
  }
}
