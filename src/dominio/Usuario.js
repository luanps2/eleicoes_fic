export class Usuario {
    constructor(login, senha) {
        this.login = login
        this.senha = senha
    }
    autenticar(senhDigitada) {
      return this.senha === senhDigitada
        }   
    }
