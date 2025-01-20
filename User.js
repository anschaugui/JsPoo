 export default class User {
    #name;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(name, email, nascimento, role, ativo = true) {
        this.#name = name;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome () {
        return this.#name;
    }

    #montaObjUser(){
        return({
            name: this.#name,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}`;
    }
}

// const newUser = new User('mariana', 'm@m.com', '01/01/1990')
// console.log(newUser);
// console.log(newUser.exibirInfos()) // mariana,;

// console.log(User.prototype.isPrototypeOf(newUser)) // true;


