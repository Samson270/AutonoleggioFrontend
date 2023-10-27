import { Component } from '@angular/core';
import { Macchina } from 'src/app/Models/Macchina';
import { AddCarService } from 'src/app/Services/add-car.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  macchine: Macchina[];
  loggato:boolean;
  constructor(private addCarService: AddCarService, private loginService:LoginService){}
  
  ngOnInit(){
    this.addCarService.getAllCars().subscribe((res: Macchina[]) =>{
      this.macchine = res;
    });
    this.loginService.loggato$.subscribe((res:boolean) => {
      this.loggato = res;
    })
  }
}
