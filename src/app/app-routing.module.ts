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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'accedi', component: AccediComponent},
  {path: 'registrati', component: RegistratiComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'admin-page/aggiungiMacchina', component: AggiungiMacchinaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
