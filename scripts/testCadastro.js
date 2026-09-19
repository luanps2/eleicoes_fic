import { Eleicao } from '../src/dominio/Eleicao.js'

const eleicao = new Eleicao()

eleicao.cadastrar('lula', 13)
eleicao.cadastrar('bolsonaro', 22)
eleicao.cadastrar('luan', 31)

console.log(eleicao.listarCandidatos())

eleicao.votar(13)
eleicao.votar(13)
eleicao.votar(22)
eleicao.votar(31)
eleicao.votar(31)
eleicao.votar(31)

console.log(eleicao.votos)
console.log(eleicao.apurarVotos())
