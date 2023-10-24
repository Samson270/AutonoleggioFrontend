import { Component } from '@angular/core';
import { AppService } from './Services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService){
    this.app.authenticate(undefined, undefined);
  }
  logout(){
    //questo è il semplice comando tvb ciao
  }
}
