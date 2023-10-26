import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  marca:String;
  modello:String;
  targa:String;
  cilindrata:String;
  prezzo:String;
  potenza:String;

  constructor()
  {
    this.marca = "Lamborghini";
    this.modello = "Huracàn";
    this.targa = "CF394VZ";
    this.cilindrata = "5,2 l";
    this.prezzo = "195.000";
    this.potenza = "640";
  }

}
