import User from "./User.js";

class Admin extends User {
    constructor(name, email, nascimento, role = 'admin', ativo = true) {
        super(name, email, nascimento, role, ativo)
    }
}