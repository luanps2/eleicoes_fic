import { Router } from 'express'
import { Eleicao } from '../dominio/Eleicao.js'
import { exigirLogin } from '../middlewares/exigirLogin.js'

const painelRouter = Router()

painelRouter.get('/', exigirLogin, (req, res) => {
    const eleicao = new Eleicao()
    res.render('painel', {
        titulo: 'Painel de Administrativo',
        usuario: req.session.usuarioLogado,
        relatorio: eleicao.apurarVotos()
    })
})

painelRouter.post('/cad-candidatos', exigirLogin, (req, res) => {
    const { nome, numero } = req.body
    const eleicao = new Eleicao()
    //faça 
    try {
        eleicao.cadastrar(nome, numero)
        //
    } catch (e) {
        console.error(e.message)
    }
    res.redirect('/painel')
})

export default painelRouter