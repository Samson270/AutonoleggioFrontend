export class PeriodoNoleggio{
    dataRitiro: Date;
    dataRitorno: Date;
    targa: string;

    constructor(dataRitiro: Date, dataRutorno: Date, targa: string){
        this.dataRitiro = dataRitiro,
        this.dataRitorno = dataRutorno;
        this.targa = targa;
    }
}