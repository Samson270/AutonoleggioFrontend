import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccediComponent } from './Components/accedi/accedi.component';
import { RegistratiComponent } from './Components/registrati/registrati.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'accedi', component: AccediComponent},
  {path: 'registrati', component: RegistratiComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
