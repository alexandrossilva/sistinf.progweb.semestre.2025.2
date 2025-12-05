const express = require("express");
const datefns = require("date-fns");

const server = express();

server.get("/hms", (req, res) => {
    let horario = datefns.format(new Date(), "HH:mm:ss");

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(`Oi, neste exato momento, são ${horario}`);
});

server.get("/dmahms", (req, res) => {
    let horario = datefns.format(new Date(), "dd/MM/yyyy HH:mm");

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(`Oi, neste exato momento, são ${horario}`);
});

server.get("/hm", (req, res) => {
    let horario = datefns.format(new Date(), "HH:mm");

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end(`Oi, neste exato momento, são ${horario}`);
});

server.listen(8000);