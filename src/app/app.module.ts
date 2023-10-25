import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AccediComponent } from './Components/accedi/accedi.component';
import { RegistratiComponent } from './Components/registrati/registrati.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { ContattiComponent } from './Components/contatti/contatti.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContatoreComponent } from './Components/contatore/contatore.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccediComponent,
    RegistratiComponent,
    CatalogoComponent,
    FaqsComponent,
    ContattiComponent,
    FooterComponent,
    ContatoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
