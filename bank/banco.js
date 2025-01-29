import { ContaCorrente } from "./contaCorrente.js";
import { Cliente } from "./cliente.js";


new Cliente();
const cliente1 = new Cliente();
cliente1.nome = "ricardo"
cliente1.cpf = 111111111111;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente1 = cliente1 

contaCorrenteRicardo.depositar(1000);

console.log(contaCorrenteRicardo);

