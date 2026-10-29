import express from "express"

const app = express()
const porta =3000

app.get('/', (req,res) => {
    res.send("Servidor Node.js com Express está funcionando!")
});


app.get('/mensagem', (req,res) => {
    res.send("Boas vindas ao Kalil server!")
});

app.get('/status',  (req, res) => {
    res.json("O servidor está atualmente online!")
});

app.get('/escola', (req,res) => {
    res.json({escola: "Harvard", local: "Brasil", Nivel_escolar: 10})
})


const cursos = [
    {id: 1, nome: "DS"},
    {id: 2, nome: "Elétrica"},
    {id: 3, nome: "Mecânica"}
]

app.get('/cursos', (req,res) => {
    res.json(cursos)
})

app.get ('/professor', (req,res) => {
    res.json({ nome: "Dante", Matéria: "Educação fisica", email: "dmc@portal.edu.br"})
})

const orientacoes = [
    {mensagem: "Uma mensagem de boas-vindas"},
    {status: "verificação do estado do servidor"},
    {escola: "Informações importantes sobre a escola"},
    {cursos: "Informações dos cursos disponiveis"},
    {professor: "Informações sobre o professor"}
]

app.get('/ajuda', (req,res) => {
    res.json (orientacoes)
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})
