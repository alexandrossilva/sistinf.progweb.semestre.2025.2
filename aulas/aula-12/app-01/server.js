const http = require("http");
const datefns = require("date-fns");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    const d = new Date();

    let horario = "";
    
    switch(req.url) {
        case "/dmahms": horario = datefns.format(d, "dd/MM/yyyy HH:mm"); break;
        case "/hm"    : horario = datefns.format(d, "HH:mm"); break;
        case "/hms"   : 
        default       : horario = datefns.format(d, "HH:mm:ss");
    }
    
    console.log(`Requisição recebida às ${horario}`);
 
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(`Oi, neste exato momento, são ${horario}`);
});

server.listen(8000);