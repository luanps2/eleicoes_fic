export class Candidato {
    constructor(id, nome, numero) {
        if (nome.length < 3) {
            throw new Error("Nome não pode ser menor que 3 caracteres")
        }
        // this = esta classe ou este contexto
        this.id = id
        this.nome = nome
        this.numero = numero
    }
}

/*
variaveis fora de classe são globais, variaveis dentro de classe são locais
const nome = "rick"
let idade = 30


variaveis dentro de classes são atributos
this.nome = "rick"
this.idade = 20
*/