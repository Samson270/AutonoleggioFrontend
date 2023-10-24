import { Component } from '@angular/core';
import { AppService } from './Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService,private router:Router){
    this.app.authenticate(undefined, undefined);
  }
  isLinkActive(route: string): boolean { // Verifica se la pagina è attiva
    return this.router.url === route;
  }

  logout(){
    //questo è il semplice comando tvb ciao
  }
}
