import User from './User.js';

export default class Docente extends User {
    constructor(name, email, nascimento, role = 'Docente', ativo = true) {
        super(name, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return ` ${estudante} passou no curso ${curso}, responsável: ${this.name}`;
    }
}

// const newDocente = new Docente('Carlos', 'carlos@gmail.ocm', '01/01/1990');
// console.log(newDocente);
// console.log(newDocente.aprovarEstudante('Mariana', 'JavaScript'));
