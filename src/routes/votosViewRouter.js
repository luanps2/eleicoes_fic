import { Router } from "express";   
import { votos } from "../dados/votos.js";

const votosViewRouter = Router()

votosViewRouter.get('/votos', (req, res) => {
    res.render('votos', { titulo: 'Lista de votos X', votos})
})

votosViewRouter.get('/votos', (req, res) => {
    res.render('votos', { titulo: 'Lista de votos X', votos })
})

export default votosViewRouter
