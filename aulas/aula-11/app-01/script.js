const d = new Date();

const hor = d.getHours();
const min = d.getMinutes();
const seg = d.getSeconds();

const horario = `${hor}:${min}:${seg}`;

console.log(`Neste exato momento, são ${horario}`);