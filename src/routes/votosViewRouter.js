import { Router } from "express";   
import { votos } from "../dados/votos.js";

const votosViewRouter = Router()

votosViewRouter.get('/votos', (req, res) => {
    res.render('votos', { titulo: 'Lista de votos X', votos})
})

votosViewRouter.get('/voto/:id', (req, res) => {
    const numero = parseInt(req.params.id)
    const votos = votos.find(v => v.candidatoId === numero)
    if (votos) {
        res.status(200)
        res.json(voto)
    } else {
        res.status(404).json({ error: 'voto não encontrado' })
    }
})

export default votosViewRouter
