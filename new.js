function User (name, email){
    this.name = name;
    this.email = email; 

    this.exibirInfos = function(){
        return `${this.name}, ${this.email}`;
    }
}

const newUser = new User('Mariana', 'mariana@gmail.com');
console.log(newUser.exibirInfos());


