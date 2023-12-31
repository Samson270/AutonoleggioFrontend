import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccediComponent } from './Components/accedi/accedi.component';
import { RegistratiComponent } from './Components/registrati/registrati.component';
import { HomeComponent } from './Components/home/home.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { ContattiComponent } from './Components/contatti/contatti.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { AggiungiMacchinaComponent } from './AdminComponents/aggiungi-macchina/aggiungi-macchina.component';
import { OrdiniComponent } from './AdminComponents/ordini/ordini.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { UtentiComponent } from './AdminComponents/utenti/utenti.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'accedi', component: AccediComponent},
  {path: 'registrati', component: RegistratiComponent},
  {path: 'admin-page',component: AdminPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'utenti', component: UtentiComponent},
      { path: 'aggiungiMacchina', component: AggiungiMacchinaComponent},
      { path: 'ordini', component: OrdiniComponent },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
