const express = require('express');
const datefns = require('date-fns');

const app = express();

app.get('/instante-atual', (req, res) => {
    res.set({
        'Content-Type': 'text/plain; charset=utf-8'
    });

    const formato = req.query.formato;

    console.log(`Formato de representação: ${formato}`);

    switch(formato) {
        case 'dia-horario': mensagem = `Data e Horário atual: ${datefns.format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`; break;
        case 'hor-min-seg': mensagem = `Horário atual: ${datefns.format(new Date(), 'HH:mm:ss')}`; break;
        case 'hor-min'    : mensagem = `Horário atual: ${datefns.format(new Date(), 'HH:mm')}`; break;
        default           : mensagem = 'Formato inválido de representação de instante atual!';
    }

    res.end(mensagem);
});

app.get('/instante-atual/formato/:formExpr', (req, res) => {
    res.set({
        'Content-Type': 'text/plain; charset=utf-8'
    });

    const formato = req.params.formExpr;

    let mensagem = '';

    console.log(`Formato de representação: ${formato}`);

    switch(formato) {
        case 'dia-horario': mensagem = `Data e Horário atual: ${datefns.format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`; break;
        case 'hor-min-seg': mensagem = `Horário atual: ${datefns.format(new Date(), 'HH:mm:ss')}`; break;
        case 'hor-min'    : mensagem = `Horário atual: ${datefns.format(new Date(), 'HH:mm')}`; break;
        default           : mensagem = 'Formato inválido de representação de instante atual!';
    }

    res.end(mensagem);
});

app.listen(3000, () => {
    console.log('Servidor iniciado!');
})