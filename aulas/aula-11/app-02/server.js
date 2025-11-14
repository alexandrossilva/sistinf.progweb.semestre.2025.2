const http = require('node:http');

function processarRequisicao(req, res) {
    const d = new Date();

    const hor = d.getHours();
    const min = d.getMinutes();
    const seg = d.getSeconds();

    const horario = `${hor}:${min}:${seg}`;

    console.log(`Requisição recebida às ${horario}`);

    res.end(`Neste exato momento, são ${horario}`);
}

// Create a local server to receive data from
const server = http.createServer(processarRequisicao);

server.listen(8000);