import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aggiungi-macchina',
  templateUrl: './aggiungi-macchina.component.html',
  styleUrls: ['./aggiungi-macchina.component.css']
})
export class AggiungiMacchinaComponent {

  autoForm = new FormGroup({
    modello: new FormControl(''),
    targa: new FormControl(''),
    cilindrata: new FormControl(''),
    marca: new FormControl(''),
    prezzoGiornaliero: new FormControl(''),
    potenza: new FormControl(''),
    
  })

  aggiungiAuto(){

  }
}
