const express = require('express');
const datefns = require('date-fns');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    'extended': false
}));

app.use((req, res, next) => {
    const mensagem = `Data e horário de requisição [${req.method} ${req.url}]: ${datefns.format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`;
    console.log(mensagem);
    next();
});

function getMensagemTempo(formato) {
    let mensagem = '';

    switch(formato) {
        case 'dia-horario': mensagem = `Data e Horário atual: ${datefns.format(new Date(), 'dd/MM/yyyy HH:mm:ss')}`; break;
        case 'hor-min-seg': mensagem = `Horário atual: ${datefns.format(new Date(), 'HH:mm:ss')}`; break;
        case 'hor-min'    : mensagem = `Horário atual: ${datefns.format(new Date(), 'HH:mm')}`; break;
        default           : mensagem = 'Formato inválido de representação de instante atual!';
    }

    return mensagem;
}

app.get('/instante-atual', (req, res) => {
    res.set({
        'Content-Type': 'text/plain; charset=utf-8'
    });

    const formato = req.query.formato;

    console.log(`Formato de representação: ${formato}`);

    res.end(getMensagemTempo(formato));
});

app.post('/instante-atual', (req, res) => {
    res.set({
        'Content-Type': 'text/plain; charset=utf-8'
    });

    const formato = req.body.formato;

    console.log(`Formato de representação: ${formato}`);

    res.end(getMensagemTempo(formato));
});

app.get('/instante-atual/formato/:formExpr', (req, res) => {
    res.set({
        'Content-Type': 'text/plain; charset=utf-8'
    });

    const formato = req.params.formExpr;

    console.log(`Formato de representação: ${formato}`);

    res.end(getMensagemTempo(formato));
});

app.listen(3000, () => {
    console.log('Servidor iniciado!');
})