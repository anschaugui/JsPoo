import User from "./User.js";

class Admin extends User {
    constructor(name, email, nascimento, role = 'admin', ativo = true) {
        super(name, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas`;
    }
}

const newAdmin = new Admin('Carlos', 'carlos@gmail.com', '01/01/1990');
console.log(newAdmin);
console.log(newAdmin.criarCurso('JS', 20));

