const user = {
    name: 'Mariana',
    email: 'mariana@gmail.com',
    nascimento: '01/01/1990',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.name, this.email);        
    }
};

const admin = {
    name: 'Carlos',
    email: 'carlos@gmail.com',
    nascimento: '01/01/1990',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos(); // Mariana
