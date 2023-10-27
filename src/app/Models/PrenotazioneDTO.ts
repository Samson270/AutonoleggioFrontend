export class PrenotazioneDTO{
    nome: string;
    cognome: string;
    username: string;
    targa: string;
    dataRitiro: Date;
    dataRitorno: Date;

    constructor(nome: string, cognome: string, username: string, targa: string, dataRitiro: Date, dataRitorno: Date){
        this.nome = nome,
        this.cognome = cognome;
        this.username = username;
        this.targa = targa;
        this.dataRitiro = dataRitiro;
        this.dataRitorno = dataRitorno;
    }
}