const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    const d = new Date();

    const dia = d.getDate();
    const ano = d.getFullYear();
    const mes = d.getMonth() + 1;
    const hor = d.getHours();
    const min = d.getMinutes();
    const seg = d.getSeconds();

    console.log(`URL: ${req.url}`);

    let horario = "";
    
    switch(req.url) {
        case "/dmahms": horario = `${dia}/${mes}/${ano} ${hor}:${min}:${seg}`; break;
        case "/hm"    : horario = `${hor}:${min}`; break;
        case "/hms"   : 
        default       : horario = `${hor}:${min}:${seg}`;
    }
    
    console.log(`Requisição recebida às ${horario}`);
 
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(`Oi, neste exato momento, são ${horario}`);
});

server.listen(8000);