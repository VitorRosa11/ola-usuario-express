const express = require ('express');
const { use } = require('react');
const app = express();
const PORT = 3000;

app.use (express.json());

app.get (`/ola/: nome`, (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá ${nome}!`);
});

app.get (`/ola/: nome`, (req, res) => {
    const nome = req.params.nome;
    res.send(`Boa noite, ${nome}!`);
});

//Saudação de bom dia ou boa noite
app.get (`/saudacao/: nome`, (req, res) => {
    const nome = req.params.nome;
    const hora = new Date().getHours();

    if(hora >= 6 && hora <= 18){
        res.send(`Bom dia, ${nome}!`);
    } else {
        res.send(`Boa tarde, ${nome}! `);
    }
});

//Inicializando o servidor
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});