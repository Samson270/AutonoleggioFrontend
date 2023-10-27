import { Component, OnInit } from '@angular/core';
import { OrdiniService } from 'src/app/AdminServices/ordini.service';
import { PrenotazioneDTO } from 'src/app/Models/PrenotazioneDTO';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.css']
})
export class OrdiniComponent implements OnInit{
  ordini:PrenotazioneDTO[];
  constructor(private ordiniService: OrdiniService){}

  ngOnInit(): void {
    this.ordiniService.getOrdini().subscribe((data) =>{
      this.ordini = data;
      console.log(data);
    })
  }
}
