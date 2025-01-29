class Boletim {
    constructor(participacao, prova, trabalho){
        this.participacao = participacao,
        this.prova = prova,
        this.trabalho = trabalho
    }
    get media(){
        return parseInt((this.participacao + this.prova + this.trabalho) / 3)
    }   
}

let boletimSemestral = new Boletim(8, 6, 7.5)
console.log(boletimSemestral.media);
