import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contatore',
  templateUrl: './contatore.component.html',
  styleUrls: ['./contatore.component.css']
})
export class ContatoreComponent {
  @Input() titolo: string = ''; // Prendono gli input dal tag
  @Input() targetCount:number;
  currentCount:number = 0;

  ngOnInit() {
    const interval = 1;
    const timer = setInterval(() => { // Ogni interval(secondi) se il valore è inferiore del target, viene incrementato
      if (this.currentCount < this.targetCount)this.currentCount++; 
      else clearInterval(timer);
    }, interval);
  }
}
