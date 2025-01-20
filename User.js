 export default class User {
    constructor(name, email, nascimento, role, ativo = true) {
        this.name = name;
        this.email = email;
        this.birth = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos() {
        return `${this.name}, ${this.email}`;
    }
}

const newUser = new User('mariana', 'm@m.com', '01/01/1990')
// console.log(newUser);
// console.log(newUser.exibirInfos()) // mariana,;

// console.log(User.prototype.isPrototypeOf(newUser)) // true;


