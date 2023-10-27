export class Utente{
    nome: string;
    cognome: string;
    username: string;
    password: string;
    numeroTelefono: string;
    anniPatente: number;

    constructor(nome: string, cognome: string, username: string, password: string, numeroTelefono: string, anniPatente: number){
        this.nome = nome,
        this.cognome = cognome;
        this.username = username;
        this.password = password;
        this.numeroTelefono = numeroTelefono;
        this.anniPatente = anniPatente;
    }
}