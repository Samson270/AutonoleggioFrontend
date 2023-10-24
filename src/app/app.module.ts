import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './Services/app.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AccediComponent } from './Components/accedi/accedi.component';
import { RegistratiComponent } from './Components/registrati/registrati.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccediComponent,
    RegistratiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
