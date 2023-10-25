import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataOggi:String;
  constructor(private data:DatePipe) {
    const dataPartenza = new Date();
    const transformDataOggi = this.data.transform(dataPartenza, 'yyyy-MM-ddTHH:mm');
    this.dataOggi = transformDataOggi;
  }

  controllaData() {
    const dataRitiroInput = document.getElementById("dataRitiro") as HTMLInputElement;
    const dataRiconsegnaInput = document.getElementById("dataRiconsegna") as HTMLInputElement;
    const erroreDiv = document.getElementById("errore");
  
    const dataRitiro = new Date(dataRitiroInput.value);
    const dataRiconsegna = new Date(dataRiconsegnaInput.value);
  
    if (dataRiconsegna < dataRitiro) {
      erroreDiv.style.display = "block";
      return false;
    } else {
      erroreDiv.style.display = "none";
      return true;
    }
  }
}
