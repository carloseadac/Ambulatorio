import { Time } from "@angular/common"

export interface AgendaUser{
    id : number,
    startDate : Date,
    endDate : Date,
    ocorrencias : {
        id : number,
        nome : string
    },
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