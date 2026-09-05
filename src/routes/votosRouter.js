import { Router } from "express";   
import { votos } from "../dados/votos.js";

const votosRouter = Router()

votosRouter.get('/votos', (req, res) => {

    res.json(votos)

})

votosRouter.get('/votos/:id', (req, res) => {
    const numero = parseInt(req.params.id)
    const voto = votos.find(c => c.candidatoId === numero)
    if (voto) {
        res.status(200)
        res.json(candidato)
    } else {
        res.status(404).json({ error: 'Voto não encontrado' })
    }
})

export default votosRouter


