console.log('exercicio01')

class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin(){
        return this.admin ? 'É Admin' : 'Não é admin'
    }
}

class Admin extends Usuario {
    constructor(email,senha){
        super(email, senha)

        this.admin = true
    }
  
}

const admin = new Admin('flavio.henso@gmail.com','1234')
const usuario = new Usuario('flavio.henrique@norteng.com.br','2342452')
console.log(admin.isAdmin())
console.log(usuario.isAdmin())