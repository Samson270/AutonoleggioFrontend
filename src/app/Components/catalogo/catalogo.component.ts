import { Component } from '@angular/core';
import { Macchina } from 'src/app/Models/Macchina';
import { AddCarService } from 'src/app/Services/add-car.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  macchine: Macchina[];
  constructor(private addCarService: AddCarService){}
  
  ngOnInit(){
    this.addCarService.getAllCars().subscribe((res: Macchina[]) =>{
      this.macchine = res;
    });
  }
}
