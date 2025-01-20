const user = {
    name: 'Mariana',
    email: 'mariana@gmail.com',
    nascimento: '01/01/1990',
    role: 'admin',
    ativo: true,
    exibirInfos: function() {
        console.log(this.name, this.email);
        
    }

}

// user.exibirInfos(); // Mariana

// const exibir = user.exibirInfos
// exibir()

const exibir = function () {
    console.log(this.name, this.nascimento);
}

const exiberNome = exibir.bind(user)
exiberNome() // Mariana
