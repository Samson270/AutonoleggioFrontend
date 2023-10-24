import { animate } from "@angular/animations";

export class Utente{
    nome: string;
    cognome: string;
    codiceFiscale: string;
    email: string;
    password: string;
    numeroTelefono: string;
    anniPatente: number;

    constructor(nome: string, cognome: string, codiceFiscale: string, email: string, password: string, numeroTelefono: string, anniPatente: number){
        this.nome = nome,
        this.cognome = cognome;
        this.codiceFiscale = codiceFiscale;
        this.email = email;
        this.password = password;
        this.numeroTelefono = numeroTelefono;
        this.anniPatente = anniPatente;
    }
}