const express = require('express');
const datefns = require('date-fns');

const app = express();

app.get('/instante-atual', (req, res) => {
    res.set({
        'Content-Type': 'text/plain; charset=utf-8'
    });

    const mensagem = `Data e Horário atual: ${datefns.format(new Date(), "dd/MM/yyyy HH:mm:ss")}`;

    res.end(mensagem);
});

app.listen(3000, () => {
    console.log('Servidor iniciado!');
})