export class PrenotazioneDTO{
    nomeCliente: string;
    cognomeCliente: string;
    username: string;
    targa: string;
    dataRitiro: Date;
    dataRitorno: Date;

    constructor(nomeCliente: string, cognomeCliente: string, username: string, targa: string, dataRitiro: Date, dataRitorno: Date){
        this.nomeCliente = nomeCliente,
        this.cognomeCliente = cognomeCliente;
        this.username = username;
        this.targa = targa;
        this.dataRitiro = dataRitiro;
        this.dataRitorno = dataRitorno;
    }
}