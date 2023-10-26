import { AddCarService } from './../../Services/add-car.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Macchina } from 'src/app/Models/Macchina';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-macchina',
  templateUrl: './aggiungi-macchina.component.html',
  styleUrls: ['./aggiungi-macchina.component.css']
})
export class AggiungiMacchinaComponent {

  tmp: Macchina;

  constructor(private addCarService: AddCarService, private router: Router){}

  autoForm = new FormGroup({
    modello: new FormControl(''),
    targa: new FormControl(''),
    cilindrata: new FormControl(0),
    marca: new FormControl(''),
    prezzoGiornaliero: new FormControl(0),
    potenza: new FormControl(0),
    imageTitle: new FormControl(''),
    descrizione: new FormControl(''),
  })

  aggiungiAuto(){
    this.tmp = new Macchina(
      this.autoForm.get('modello').value,
      this.autoForm.get('targa').value,
      this.autoForm.get('cilindrata').value,
      this.autoForm.get('marca').value,
      this.autoForm.get('prezzoGiornaliero').value,
      this.autoForm.get('potenza').value,
      "../../../assets/" + this.autoForm.get('').value,
      this.autoForm.get('descrizione').value,
    );
    

    //console.log("./src/assets/" + this.autoForm.get(['imageTitle']).value);
  }
}
