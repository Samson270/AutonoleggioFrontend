import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggato: boolean;
  nome: string;

  ngOnInit(){
    this.loginService.loggato$.subscribe((loggato) => {
      this.loggato = loggato;
      if (loggato) {
        this.nome = this.loginService.nome;
      } else {
        this.nome = null;
      }
    });
  }

  constructor(private loginService: LoginService,private router:Router){
  }
  isLinkActive(route: string): boolean { // Verifica se la pagina è attiva
    return this.router.url === route;
  }

  logout(){
    this.loginService.logout();
  }
}
