import User from './User.js';
import Admin from './admin.js';
import Docente from './docente.js';

const novoAdmin = new User('mariana', 'maraian@gmail.com', '01/01/1990');
console.log(novoAdmin.nome);
// console.log(novoUser.exibirInfos());

novoUser.nome = 'Julia';
console.log(novoUser.nome);



// novoUser.#nome = 'Juliana';
// console.log(novoUser);
// console.log(novoUser.#nome);

