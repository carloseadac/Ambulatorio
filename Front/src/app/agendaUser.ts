import { Time } from "@angular/common"

export interface AgendaUser{
    results: any
    id : number,
    startDate : Date,
    endDate : Date,
    aprovado : boolean,
    user : {
        id : number,
        nome : string,
        edv : string,
        area : string,
        dataNasc : string,
        email : string,
        senha : string
    }
}

export class Ocorrencias{
    id: number | undefined;
    nome: string| undefined 

}