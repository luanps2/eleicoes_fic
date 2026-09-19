import { Candidato } from './Candidato.js'
// extensão do arquivo é obrigatória por que usamos module no package.json

export class Eleicao {
    constructor() {
        this.candidatos = []
        this.votos = []
    }
    //metodo para adicionar candidato
    cadastrar(nome, numero) {
        let numeroUrna = Number(numero)
        const candidatoExiste = this.candidatos.find((candidato) => candidato.numero === numeroUrna)
        if (candidatoExiste) {
            throw new Error("Candidato já existe!")
        }
        const id = this.candidatos.length + 1
        const candidato = new Candidato(id, nome, numeroUrna)
        this.candidatos.push(candidato)
        return candidato
    }
    //camelCase
    listarCandidatos() {
        return this.candidatos
    }

    votar(numeroUrna) {
        this.votos.push({numeroUrna})
    }

    apurarVotos() {
        return this.candidatos.map((candidato) => {
            const recebidos = this.votos.filter((voto) => voto.numeroUrna === candidato.numero)
            console.log(`Candidato: ${candidato.nome} recebeu ${recebidos.length} votos`);
            
            return {
                id: candidato.id,
                nome: candidato.nome,
                numero: candidato.numero,
                votos: recebidos.length
            }
        })
    }

}


/*
função fora de classe é pode ser chamada de função
mas função dentro de classe é chamada de método
*/