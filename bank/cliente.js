class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
}

new Cliente();
const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 100;
console.log(`o saldo do ${cliente1.nome} é: ${contaCorrenteRicardo.saldo}`);
contaCorrenteRicardo.sacar(220);
console.log(`o saldo do ${cliente1.nome} é: ${contaCorrenteRicardo.saldo}`);


const ContaCorrenteAlice = new ContaCorrente();
ContaCorrenteAlice.agencia = 1002;
ContaCorrenteAlice.saldo = 0;



console.log(cliente1);
console.log(cliente2);
