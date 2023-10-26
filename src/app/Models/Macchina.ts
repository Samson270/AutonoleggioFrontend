export class Macchina{
    modello: string;
    targa: string;
    cilindrata: number;
    marca: string;
    prezzoGiornaliero: number;
    potenza: number;
    imageTitle: string;
    descrizione: string;

    constructor(modello: string, targa: string, cilindrata: number, marca: string, prezzoGiornaliero: number, potenza: number, imageTitle: string, descrizione: string){
        this.modello = modello;
        this.targa = targa;
        this.cilindrata = cilindrata;
        this.marca = marca;
        this.prezzoGiornaliero = prezzoGiornaliero;
        this.potenza = potenza;
        this.imageTitle = imageTitle;
        this.descrizione = descrizione;
    }
}