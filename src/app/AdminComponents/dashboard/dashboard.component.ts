import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from 'src/app/AdminServices/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  utentiTotali:number;
  constructor(private dashboardService: DashboardService){}

  ngOnInit(): void {
    this.dashboardService.getUtentiTotali().subscribe(count => {
      this.utentiTotali = count;
    });
  }
}
