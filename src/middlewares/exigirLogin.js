export function exigirLogin(req, res, next) {
    // if (!req.sesseion.UsuarioLogado) {
    //     res.status(401).json({ mensagem: "Usuário não autenticado" })
    //     return
    // }
    next()
}