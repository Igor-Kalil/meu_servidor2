//SPRINT 1


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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//SPRINT 2


const mensagens = [
  { id: 1, usuario: "Ana", texto: "Bom dia!" },
  { id: 2, usuario: "Pedro", texto: "Olá!" },
  { id: 3, usuario: "Maria", texto: "Tudo bem?" },
  { id: 4, usuario: "Lucas", texto: "Como vai?" },
  { id: 5, usuario: "Carla", texto: "Até logo!" }
];

function listarMensagens() { return mensagens; }

app.get("/", (req, res) => res.send("Servidor rodando! 🚀"));

app.get("/status", (req, res) => res.json({ status: "online", sprint: 2 }));

 
app.get("/sobre", (req, res) => res.send("Projeto Mensageiro Local"));

app.get("/mensagens", (req, res) => res.json(listarMensagens()));

app.get("/mensagens/:id", (req, res) => {
  const mensagem = mensagens.find(m => m.id === Number(req.params.id));
  if (!mensagem) return res.status(404).json({ erro: "Não encontrada" });
  res.json(mensagem);
});

app.get("/total-mensagens", (req, res) => res.json({ total: mensagens.length }));

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//SPRINT 3


function consultar(falhar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
    falhar
    ?reject(new Error("falhou"))
    : resolve(mensagens);
        }, 1000);
    });
}

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})


app.get("/mensagens-then", (req,res) => {
    consultar()
    .then(lista => res.json(lista))
    .catch(() => res.status(500).json({erro: "Falha na consulta"}));
});